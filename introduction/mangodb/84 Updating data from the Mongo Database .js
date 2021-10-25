// CRUD -- create read update and delete

// we will see data using  [db.smartphone_info.find()]
//updating data
db.smartphone_info.updateOne({selectfilter}, {$set: {changingInformation}})
example.

db.smartphone_info.updateOne({"name": "moto fusion"}, {$set: {"price": 11000}})
db.smartphone_info.updateMany({"name": "iphone7"}, {$set: {"price": 135000}, "rating": 1})