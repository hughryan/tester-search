#Tester Search: Applause Interview Assignment
###Author: Hugh McDonald (hughryanm@gmail.com)
###Date: 2/21/16
###Live Application: http://tester-search.hughryan.me

### Built Using
```
  Meteor
  React
  Node
  MongoDB
```
### Development Setup
```
  curl https://install.meteor.com/ | sh
  tar -zxf tester-search-source.tar.gz
  cd ./tester-search
  meteor
```  
Seed the database (see instructions below) then connect locally: http://localhost:3000
### Production Setup
  Set Node version to 0.10.40 using NVM
```  
  tar -zxf tester-search.tar.gz
  cd ../bundle/programs/server
  npm install
  PORT=80 MONGO_URL=mongodb://localhost:27017/tester-search node main.js
```
  Seed database (see instructions below)
### Database Seeding
##### From Dump
*In development:*

Make sure the application is running
```  
  cd ./private
  mongorestore --host localhost:3001 --db meteor
```
*In production:*

Make sure the application is running
```  
  mv ./private/dump/meteor ./private/dump/tester-search
  cd ./private
  mongorestore
```
##### Using original migrations
```
cd ./private/db_migration
```
Import initial data
```
source seed_db.sh
```

Run migrations
```
mongo --host localhost:3001 meteor < migrate_bug_testers.js
mongo --host localhost:3001 meteor < migrate_bug_devices.js
mongo --host localhost:3001 meteor < migrate_tester_devices.js
```
