// 1.For deleting  database 
    // first need to use/switch database using [use database_name] cmd
    // then enter [db.dropDatabase()] cmd 

// 2. for delting collection in database
//     after switching database, use [show collections ] cmd , and see all collections in choosen database, 
//     [db.choosen_collection_name.drop()] use this command


// 3.deleting Object form collection  

// deleteOne will delete first entry in starting in case of multilple same instances are available
db.smartphone_info.deleteOne({name: "mi note 10 pro"});
//deleteMany will delete all entry while matching same instances
db.smartphone_info.deleteMany({name: "mi note 10 pro"}, {price: 13000});