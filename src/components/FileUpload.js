import React, { useState } from 'react';
import uploadIcon from '../upload.png'; // Adjust the path as needed
import { uploadFile } from '../services/fileServices'; // Import uploadFile function from fileServices.js
import '../App.css'; // Import main CSS file for common styles

function FileUpload({ onFileUpload }) {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (file) {
            try {
                // Call uploadFile function from fileServices.js
                const uploadedFile = await uploadFile(file);
                onFileUpload(uploadedFile);
                setFile(null);
            } catch (error) {
                console.error('Error uploading file:', error);
                // Handle error if needed
            }
        }
    };

    return (
        <div className="file-upload-container">
            <button type="button" className="btn upload-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={uploadIcon} alt="Upload Icon" className="upload-icon" />
                <h2 className="upload-text">Upload File</h2>
            </button>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Confirm Upload</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input 
                                type="file" 
                                onChange={handleFileChange} 
                                id="fileInput" 
                                style={{ display: 'none' }} 
                            />
                            <label 
                                htmlFor="fileInput" 
                                className={`btn ${file ? 'btn-success' : 'btn-danger'}`}
                            >
                                {file ? 'File Selected' : 'Choose File'}
                            </label>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <span 
                                className="btn btn-primary" 
                                onClick={handleFileUpload} 
                                data-bs-dismiss="modal"
                                style={{ cursor: file ? 'pointer' : 'not-allowed', opacity: file ? 1 : 0.5 }}
                            >
                                Upload File
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FileUpload;
