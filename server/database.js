const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/book_shop?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false', 
        {useNewUrlParser: true,useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connected to mongodb');
});
