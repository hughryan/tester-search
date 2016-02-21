db = connect("localhost:3001/meteor");

db.testers.update(
  { testerId: 1 },
  { $set:
    { devices: ["iPhone 4","iPhone 4S","iPhone 5","iPhone 3"] }
  }
);

db.testers.update(
  { testerId: 2 },
  { $set:
    { devices: ["Galaxy S3","Galaxy S4","Nexus 4","Droid Razor","Droid DNA","HTC One"] }
  }
);

db.testers.update(
  { testerId: 3 },
  { $set:
    { devices: ["iPhone 5","Galaxy S3","Galaxy S4","Nexus 4"] }
  }
);

db.testers.update(
  { testerId: 4 },
  { $set:
    { devices: ["iPhone 4","iPhone 4S"] }
  }
);

db.testers.update(
  { testerId: 5 },
  { $set:
    { devices: ["iPhone 4","Galaxy S4","Nexus 4","Droid Razor","iPhone 3"] }
  }
);

db.testers.update(
  { testerId: 6 },
  { $set:
    { devices: ["iPhone 5"] }
  }
);

db.testers.update(
  { testerId: 7 },
  { $set:
    { devices: ["Galaxy S3","Galaxy S4","Nexus 4","Droid Razor","Droid DNA"] }
  }
);

db.testers.update(
  { testerId: 8 },
  { $set:
    { devices: ["iPhone 4","iPhone 5","Nexus 4","HTC One","iPhone 3"] }
  }
);

db.testers.update(
  { testerId: 9 },
  { $set:
    { devices: ["Galaxy S4","Nexus 4","Droid DNA","HTC One"] }
  }
);
