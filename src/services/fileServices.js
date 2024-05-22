export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
    });

    return response.json();
};

export const getFileChunks = async (fileId) => {
    const response = await fetch(`http://localhost:5000/api/${fileId}`);
    return response.json();
};
