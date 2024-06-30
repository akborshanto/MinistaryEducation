import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import jsPDF from 'jspdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import ResultCreate from './shared/ResultCreate';

const ResultSheet = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };
  
    const generatePDF = () => {
      const doc = new jsPDF();
      doc.text('Hello world!', 10, 10);
      doc.text('<ResultCreate></ResultCreate>' 10, 20);
      doc.save('generated.pdf');
    };
  


  return (
    <div>
    <div>
    <Document
      file="path/to/your/pdf/file.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={pageNumber} />
    </Document>
    <div>
      Page {pageNumber} of {numPages}
    </div>
    <button
      disabled={pageNumber <= 1}
      onClick={() => setPageNumber(pageNumber - 1)}
    >
      Previous
    </button>
    <button
      disabled={pageNumber >= numPages}
      onClick={() => setPageNumber(pageNumber + 1)}
    >
      Next
    </button>
  </div>
  <div>
    <button onClick={generatePDF}>Generate PDF</button>
  </div>


    </div>
  )
}

export default ResultSheet
