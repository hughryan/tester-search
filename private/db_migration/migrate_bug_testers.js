db = connect("localhost:3001/meteor");

db.bugs.updateMany(
  { testerId: 1 },
  { $set:
    { tester: "Miguel Bautista" }
  }
);

db.bugs.updateMany(
  { testerId: 2 },
  { $set:
    { tester: "Michael Lubavin" }
  }
);

db.bugs.updateMany(
  { testerId: 3 },
  { $set:
    { tester: "Leonard Sutton" }
  }
);

db.bugs.updateMany(
  { testerId: 4 },
  { $set:
    { tester: "Taybin Rutkin" }
  }
);

db.bugs.updateMany(
  { testerId: 5 },
  { $set:
    { tester: "Mingquan Zheng" }
  }
);

db.bugs.updateMany(
  { testerId: 6 },
  { $set:
    { tester: "Stanley Chen" }
  }
);

db.bugs.updateMany(
  { testerId: 7 },
  { $set:
    { tester: "Lucas Lowry" }
  }
);

db.bugs.updateMany(
  { testerId: 8 },
  { $set:
    { tester: "Sean Wellington" }
  }
);

db.bugs.updateMany(
  { testerId: 9 },
  { $set:
    { tester: "Darshini Thiagarajan" }
  }
);
