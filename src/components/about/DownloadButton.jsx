import React from 'react';
import { FaFile } from 'react-icons/fa';
import curriculo from '../about/pdf/Currículo.pdf'

const DownloadButton = () => {
  const handleDownload = () => {
    const cvPdfLink = curriculo;

    // Crie um elemento 'a' temporário para iniciar o download.
    const link = document.createElement('a');
    link.href = cvPdfLink;
    link.download = 'Currículo.pdf'; // Nome do arquivo a ser baixado
    link.target = '_blank'; // Abre em uma nova guia se necessário
    
    // Disparar um clique no elemento 'a' para iniciar o download.
    link.click();
  };

  return (
    <div className="download-button-container">
    <button className="download-button" onClick={handleDownload}>
      <div className='icon-flip'><FaFile className="download-icon" />      </div>
      Download CV

    </button>
  </div>
  );
};

export default DownloadButton;
