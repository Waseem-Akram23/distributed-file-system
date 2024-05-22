const express = require('express');
const { uploadFile, getFileChunks, upload } = require('../controllers/fileController');

const router = express.Router();

router.post('/upload', upload.single('file'), uploadFile);
router.get('/:fileId', getFileChunks);

module.exports = router;
