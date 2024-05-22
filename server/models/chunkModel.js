const mongoose = require('mongoose');

const chunkSchema = new mongoose.Schema({
    fileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File',
    },
    chunkIndex: Number,
    chunkData: Buffer,
});

const Chunk = mongoose.model('Chunk', chunkSchema);

module.exports = Chunk;
