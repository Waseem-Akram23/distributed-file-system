import React from 'react';
import './FileList.css'; // Import CSS file for styling

function FileList({ files }) {
  return (
    <div className="file-list-container">
      <h2>File List</h2>
      <div className="file-list">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            {file.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileList;
