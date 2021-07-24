const mongoose = require('mongoose');

const mongo_atlas = "mongodb+srv://cloud16:Cloudgrey16@cluster0.64pln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongo_atlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });