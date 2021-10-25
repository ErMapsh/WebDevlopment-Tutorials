// in mango Database : 

// 1.firstly we need to install mongodb.
// 2.after installation need to run ps as admini and enter [mongod] cmd, and ur database has running
// 3.again run ps as administrator for accessing mongodb and enter cmd [mongo]
// so work on second ps terminal


// common cmd in use:
//  0.db                               cmd show current working database in ps
//  1.use [database name]  :           default database is test so if u need to change/create database then use this cmd with                 your database name , after switch database , u need just write db.
//  2.show dbs                         show all databases in our machine 
//  3.show collections                 show all collections in choosen database 
//  4.db.collection_name.find()        find data in collection & u can easily find data giving argument to find(). 
//  5.db.collection_name.insert()      this cmd is use for inserting data such as more inserting methods available














// advance cmd for mangodb:
// just enter help cmd in ps

//  db.help()                    help on db methods
//  db.mycoll.help()             help on collection methods
//  sh.help()                    sharding helpers
//  rs.help()                    replica set helpers
//  help admin                   administrative help
//  help connect                 connecting to a db help
//  help keys                    key shortcuts
//  help misc                    misc things to know
//  help mr                      mapreduce

//  show dbs                     show database names
//  show collections             show collections in current database
//  show users                   show users in current database
//  show profile                 show most recent system.profile entries with time >= 1ms
//  show logs                    show the accessible logger names
//  show log [name]              prints out the last segment of log in memory, 'global' is default
//  use <db_name>                set current database
//  db.mycoll.find()             list objects in collection mycoll
//  db.mycoll.find( { a : 1 } )  list objects in mycoll where a == 1
//  it                           result of the last line evaluated; use to further iterate
//  DBQuery.shellBatchSize = x   set default number of items to display on shell
//  exit                         quit the mongo shell

