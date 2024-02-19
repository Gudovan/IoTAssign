import React from 'react';

const FileUploadComponent = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(file);
  };
  const inputStyles={
    marginTop:'10px',
    fontSize:'16px',
    padding:'5px',
    bolder:'1px solid #ccc',
    borderRadius:'4px',
  }

  return (
    <div>
      <label htmlFor='fileInput'>Choose File</label>
      <input type="file" accept="audio/*" id='fileInput' onChange={handleFileChange} style={inputStyles}/>
    </div>
  );
};

export default FileUploadComponent;