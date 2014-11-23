/*jshint node:true*/
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BibleSchema = new Schema({
  book: String,
  chapter: Number,
  verse: Number,
  related: [{ type: Schema.Types.ObjectId, ref: 'Bible' }],
  topic: [String],
  resource: [Object],
  comments: [{ ref: 'Comments' }],
  hidden: true,
  meta: {
    favorties: Number,
    tags: String
  }
});

module.exports = mongoose.model('Bible', BibleSchema);
