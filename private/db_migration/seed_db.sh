#!/bin/sh
mongoimport --host localhost:3001 --db meteor --collection testers --type csv --file testers.csv --headerline
mongoimport --host localhost:3001 --db meteor --collection bugs --type csv --file bugs.csv --headerline
