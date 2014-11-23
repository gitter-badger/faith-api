/*jshint node:true*/
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  comments: author: String, title: String, body: String, date: { type: Date, default: Date.now },
  hidden: true,
  favorties: Number,
  tags: String,
  upvotes: Number,
  downVotes: Number,

});

module.exports = mongoose.model('Comment', CommentSchema);
