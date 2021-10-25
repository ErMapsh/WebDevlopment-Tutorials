// index.js

// 1. npm install mongoose --save 



// 2.import mongoose and mongoose connect to Your Database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ErMapsh', { useNewUrlParser: true, useUnifiedTopology: true });



// 3.showing connection between mongoodb
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('we re connected!');
});


//4. in every mongodb need to specify/defince Schema
const KittySchema = new mongoose.Schema({name: String});


//5.  how to speak fuctionality add in our function
KittySchema.methods.speak = function () {
  const greeting = "Meow name is " + this.name
  console.log(greeting);
}

//6.create a collection name/model name in database as kitten name, and add document using kitten
const Kitten = mongoose.model('Kitten', KittySchema);


//7.creating name for in kitten collection
const MelodyKitty = new Kitten({ name: 'MelodyKitty' });
const MrKhiladi = new Kitten({name:  'MrKhiladi' });
// MelodyKitty.speak(); // "Meow name is MelodyKitty"



// 8.for saving data in database
MelodyKitty.save(function (err, MelodyKitty) {
  if (err) return console.error(err);
  // MelodyKitty.speak();
});

MrKhiladi.save(function (err, MrKhiladi) {
  if (err) return console.error(err);
  // MrKhiladi.speak();
});

// 9.analysis data in database
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log("All data:",kittens);
});

Kitten.find({name: 'MrKhiladi'}, function (err, kittens) {
  if (err) return console.error(err);
  console.log("MrKhiladi data:", kittens);
})