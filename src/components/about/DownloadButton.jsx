import React from 'react';
import curriculo from '../about/pdf/Currículo.pdf'

const DownloadButton = () => {
  const handleDownload = () => {
    const cvPdfLink = curriculo;

    const link = document.createElement('a');
    link.href = cvPdfLink;
    link.download = 'Currículo.pdf';
    link.target = '_blank'; 
        link.click();
  };

  return (
    <div className="download-button-container">
    <button className="download-button" onClick={handleDownload}>
      Download CV

    </button>
  </div>
  );
};

export default DownloadButton;
