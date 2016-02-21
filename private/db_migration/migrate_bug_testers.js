db = connect("localhost:3001/meteor");

db.bugs.updateMany(
  { tester: 1 },
  { $set:
    { tester: "Miguel Bautista" }
  }
);

db.bugs.updateMany(
  { tester: 2 },
  { $set:
    { tester: "Michael Lubavin" }
  }
);

db.bugs.updateMany(
  { tester: 3 },
  { $set:
    { tester: "Leonard Sutton" }
  }
);

db.bugs.updateMany(
  { tester: 4 },
  { $set:
    { tester: "Taybin Rutkin" }
  }
);

db.bugs.updateMany(
  { tester: 5 },
  { $set:
    { tester: "Mingquan Zheng" }
  }
);

db.bugs.updateMany(
  { tester: 6 },
  { $set:
    { tester: "Stanley Chen" }
  }
);

db.bugs.updateMany(
  { tester: 7 },
  { $set:
    { tester: "Lucas Lowry" }
  }
);

db.bugs.updateMany(
  { tester: 8 },
  { $set:
    { tester: "Sean Wellington" }
  }
);

db.bugs.updateMany(
  { tester: 9 },
  { $set:
    { tester: "Darshini Thiagarajan" }
  }
);
