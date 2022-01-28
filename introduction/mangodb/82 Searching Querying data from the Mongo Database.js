// for analysis/Searching data in Mangodb

// db.collection_name.find()           here collection_name name is group of data in database
// 1) if we want specific data from Mangodb then need to give specific key pair as argument or filter argument in find function ie.                   

// db.data.find({"name":"Oppo"})    : this querry will return for all objects with "name" equal to "oppo"

// we create collection as smarthphone_info in ErMapsh :a information of mobile in json format for uploading or storing a data in Mangodb

db.smartphone_info.insertMany([{name: "mi note 10 pro", price: 15000, rating: 4, sold: 3000, qty: 188 },{name: "moto fusion", price: 13000, rating: 3, sold: 1000, qty: 88 },{name: "iphone7", price: 25000, rating: 4.5, sold: 30000, qty: 1848 },{name: "oneplus nord", price: 25000, rating: 4, sold: 2400, qty: 345 },{name: "Poco x3", price: 18000, rating: 3.7, sold: 1110, qty: 18 }])

//for searching specific data
db.smartphone_info.find({rating: {$gte:4}})
db.smarthphone_info.find({rating: {$gt:4}})
db.smarthphone_info.find({rating: {$lt:4}})
db.smarthphone_info.find({rating: {$lte:4}})

//And operator
db.smartphone_info.find({rating: {$gte: 4}, price: {$gte: 15000}})

//or operator
db.smartphone_info.find(  {$or:[    {rating: {$gte: 4}},   {price: {$gte: 15000}}]})

//projection
db.smartphone_info.find( {rating: {$gte: 3}}, {rating:1, qty:1}) //only rating true and other key are false



