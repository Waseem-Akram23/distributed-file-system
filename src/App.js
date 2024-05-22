import React, { useState } from 'react';
import './App.css';
import FileList from './components/FileList';
import FileUpload from './components/FileUpload';
// import FileViewer from './components/FileViewer';

function App() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (file) => {
    setFiles([...files, file]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1><span className='Span-Title-Text'>Welcome to</span> File Storage System</h1>
      </header>
      <main>
        <FileUpload onFileUpload={handleFileUpload} />
        <FileList files={files} />
        {/* <FileViewer /> */}
      </main>
    </div>
  );
}

export default App;
