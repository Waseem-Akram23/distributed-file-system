const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: String,
    chunks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chunk',
        },
    ],
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
