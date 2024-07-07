import React, { useState ,useRef} from 'react';
import { Document, Page } from 'react-pdf';
import jsPDF from 'jspdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import ResultCreate from './shared/ResultCreate';
import Table from './shared/table';

import { useReactToPrint } from 'react-to-print';

const ResultSheet = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    pdf.text('Marksheet', 10, 10);
    pdf.text(`Student Name: ${getLocalStorageData?.studentData.name}`, 10, 20);
    let yOffset = 30;
    getLocalStorageData?.studentData.marksheet.forEach((subject, index) => {
      pdf.text(`Subject ${index + 1}: ${subject.subject} - Marks: ${subject.marks}`, 10, yOffset);
      yOffset += 10;
    });
    pdf.text(`CGPA: ${getLocalStorageData?.studentData.cgpa}`, 10, yOffset);
    pdf.save('marksheet.pdf');
  };

  
/* get the local storage data */

const getLocalStorageData=JSON.parse(localStorage.getItem('allStudentInfo')) || {} 

  return (
    <div>




<Table getLocalStorageData={getLocalStorageData} handlePrint={handlePrint} handleDownloadPDF={handleDownloadPDF}></Table>













    {/* PDF*/}
{/*     <div>
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
  </div> */}


    </div>
  )
}

export default ResultSheet
