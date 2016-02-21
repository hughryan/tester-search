db = connect("localhost:3001/meteor");

db.bugs.updateMany(
  { device: 1 },
  { $set:
    { device: "iPhone 4" }
  }
);

db.bugs.updateMany(
  { device: 2 },
  { $set:
    { device: "iPhone 4S" }
  }
);

db.bugs.updateMany(
  { device: 3 },
  { $set:
    { device: "iPhone 5" }
  }
);

db.bugs.updateMany(
  { device: 4 },
  { $set:
    { device: "Galaxy S3" }
  }
);

db.bugs.updateMany(
  { device: 5 },
  { $set:
    { device: "Galaxy S4" }
  }
);

db.bugs.updateMany(
  { device: 6 },
  { $set:
    { device: "Nexus 4" }
  }
);

db.bugs.updateMany(
  { device: 7 },
  { $set:
    { device: "Droid Razor" }
  }
);

db.bugs.updateMany(
  { device: 8 },
  { $set:
    { device: "Droid DNA" }
  }
);

db.bugs.updateMany(
  { device: 9 },
  { $set:
    { device: "HTC One" }
  }
);

db.bugs.updateMany(
  { device: 10 },
  { $set:
    { device: "iPhone 3" }
  }
);
