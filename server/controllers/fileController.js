const File = require('../models/fileModel');
const Chunk = require('../models/chunkModel');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const uploadFile = async (req, res) => {
    const file = req.file;
    const chunkSize = 1 * 1024 * 1024; // 1MB
    const buffer = fs.readFileSync(file.path);

    const newFile = new File({ name: file.originalname });
    await newFile.save();

    const chunkPromises = [];

    for (let i = 0; i < buffer.length; i += chunkSize) {
        const chunk = new Chunk({
            fileId: newFile._id,
            chunkIndex: i / chunkSize,
            chunkData: buffer.slice(i, i + chunkSize),
        });

        chunkPromises.push(chunk.save());
    }

    await Promise.all(chunkPromises);
    fs.unlinkSync(file.path);

    res.json(newFile);
};

const getFileChunks = async (req, res) => {
    const { fileId } = req.params;
    const file = await File.findById(fileId).populate('chunks');
    res.json(file);
};

module.exports = {
    uploadFile,
    getFileChunks,
    upload,
};
