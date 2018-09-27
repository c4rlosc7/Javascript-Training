'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AlbumSchema = Schema({    
    title: String,
    description: String,
    year: Number,
    image: string,
    artist: { type: Schema.ObjectId, ref: 'Artist' } // ref object artist
});

module.exports = mongoose.model('Album', AlbumSchema);
