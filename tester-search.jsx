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
        const testers = Testers.find(query).fetch().map((tester) => { return tester.name; });
        let bugQuery = {};
        if (query.devices) {
          bugQuery = { "tester": { "$in": testers }, "device": query.devices };
        } else {
          bugQuery = { "tester": { "$in": testers}};
        }
        var pipeline = [
          { "$match": bugQuery },
          { "$group": {
              "_id": {
                "tester": "$tester",
                "device": "$device"
              },
              "bugCount": { "$sum": 1 }
            }},
          { "$group": {
              "_id": "$_id.tester",
              "bugs": {
                "$push": {
                  "bug": "$_id.bugId",
                  "count": "$bugCount"
                },
              },
              "count": { "$sum": "$bugCount"}
            }},
            { "$sort": { "count": -1 } }
        ];
        return Bugs.aggregate(pipeline);
      }
    });
}
