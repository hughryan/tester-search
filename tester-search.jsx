// Mongo Collections
Testers = new Mongo.Collection("testers");
Bugs = new Mongo.Collection("bugs");

// Client
if (Meteor.isClient) {
  Meteor.startup(() => {
    ReactDOM.render(<TesterSearch />, document.getElementById("render-target"));
  });
}

// Server
if (Meteor.isServer) {
    Meteor.methods({
      'getCountries': () => {
        var pipeline = [
          { $group: {_id: "$country"} }
        ];
        return Testers.aggregate(pipeline);
      },

      'getDevices': () => {
        var pipeline = [
          { $unwind: "$devices" },
          { $group: {_id: "$devices"} }
        ];
        return Testers.aggregate(pipeline);
      },

      'searchAndSort': (query) => {
        const testers = Testers.find(query).fetch().map((tester) => { return tester.testerId; });
        let bugQuery = {};
        if (query.devices) {
          bugQuery = { "testerId": { "$in": testers }, "device": query.devices };
        } else {
          bugQuery = { "testerId": { "$in": testers}};
        }
        var pipeline = [
          { "$match": bugQuery },
          { "$group": {
              "_id": {
                "testerId": "$testerId",
                "device": "$device"
              },
              "name": { "$first": "$tester" },
              "bugCount": { "$sum": 1 }
            }},
          { "$group": {
              "_id": "$_id.testerId",
              "name": { "$first": "$name"},
              "bugs": {
                "$push": {
                  "device": "$_id.device",
                  "count": "$bugCount"
                },
              },
              "count": { "$sum": "$bugCount"}
            }},
            { "$sort": { "count": -1 } }
        ];
        const result = Bugs.aggregate(pipeline);
        //console.log("Results:", JSON.stringify(result, null, 2));
        return result.map((tester) => { return tester.name; });
      }
    });
}
