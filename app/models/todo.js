// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TodoSchema = new Schema({
  title: {type: String, default: ''},
  completed: {type: Boolean, default: false}
});

TodoSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Todo', TodoSchema);
