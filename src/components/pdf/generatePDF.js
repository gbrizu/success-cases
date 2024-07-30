import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CaseViewContextProvider } from "../../context/casesView.context";
import { getSuccessCaseById } from "../../services/successCaseServerCalls";
import jsPDF from 'jspdf';
import { Button } from '@mui/material';

const GeneratePDF = () => {
  const { setSuccessCase, actualSuccessCase, challenge, setChallenge, casedetail, setCaseDetail, technology, setTechnology, improvement, setImprovement } = useContext(CaseViewContextProvider);
  const { id } = useParams();

  useEffect(() => {
    getSuccessCaseById(id).then((response) => {
      setSuccessCase(response);
      setChallenge(response.Challenge);
      setCaseDetail(response.CaseDetail);
      setTechnology(response.Technology);
      setImprovement(response.Improvement);
    });
  }, [id, setSuccessCase, setChallenge, setCaseDetail, setTechnology, setImprovement]);

  const addImageToPDF = (doc, imageUrl, x, y, maxWidth, maxHeight) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        const imgWidth = img.width;
        const imgHeight = img.height;
        const aspectRatio = imgWidth / imgHeight;

        let width = maxWidth;
        let height = maxHeight;

        if (imgWidth > imgHeight) {
          height = maxWidth / aspectRatio;
        } else {
          width = maxHeight * aspectRatio;
        }

        if (width > maxWidth) {
          width = maxWidth;
          height = maxWidth / aspectRatio;
        }

        if (height > maxHeight) {
          height = maxHeight;
          width = maxHeight * aspectRatio;
        }

        doc.addImage(imageUrl, 'JPEG', x, y, width, height);
        resolve(height);
      };
      img.onerror = reject;
    });
  };

  const generatePDF = async () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(20);
    doc.setTextColor('#BFD52E');
    doc.text('Success Case Details', 14, 22);
    
    doc.setFontSize(12);
    doc.setTextColor('#000000');

    let yPos = 30;
    const lineHeight = 10;
    const leftMargin = 14;
    const pageHeight = doc.internal.pageSize.height;
    const maxWidth = 180; // Max width for image
    const maxHeight = 80; // Max height for image

    const addSection = async (title, content, images) => {
      if (content.length > 0 || images.length > 0) {
        if (yPos + lineHeight * (content.length + images.length + 1) > pageHeight - 20) {
          doc.addPage();
          yPos = 20;
        }
        
        doc.setFontSize(14);
        doc.setTextColor('#BFD52E');
        doc.text(title, leftMargin, yPos);
        yPos += lineHeight;

        doc.setFontSize(12);
        doc.setTextColor('#000000');
        content.forEach(text => {
          if (yPos + lineHeight > pageHeight - 20) {
            doc.addPage();
            yPos = 20;
          }
          doc.text(text, leftMargin, yPos);
          yPos += lineHeight;
        });

        for (const imageUrl of images) {
          if (yPos + maxHeight > pageHeight - 20) { // If the image would overflow the page
            doc.addPage();
            yPos = 20;
          }
          if (imageUrl) {
            const imageHeight = await addImageToPDF(doc, imageUrl, leftMargin, yPos, maxWidth, maxHeight);
            yPos += imageHeight + 10; // Ajusta el espacio después de la imagen
          } else {
            doc.text('No image attached', leftMargin, yPos);
            yPos += lineHeight;
          }
        }

        yPos += 5; 
      }
    };

    if (actualSuccessCase) {
      await addSection('General Information', [
        `Title: ${actualSuccessCase.title}`,
        `Date: ${actualSuccessCase.startdate} - ${actualSuccessCase.finishdate}`,
        `Team size: ${actualSuccessCase.teamsize}`,
        `Public: ${actualSuccessCase.ispublic ? 'Yes' : 'No'}`,
        `Client: ${actualSuccessCase.Client ? actualSuccessCase.Client.name : ''}`,
        `Industry: ${actualSuccessCase.Industry ? actualSuccessCase.Industry.name : ''}`,
        `Project type: ${actualSuccessCase.ProjectType ? actualSuccessCase.ProjectType.name : ''}`,
        `Offering: ${actualSuccessCase.Offering ? actualSuccessCase.Offering.name : ''}`,
        `Project contact: ${actualSuccessCase.Contact ? actualSuccessCase.Contact.email : ''}`,
      ], []);

      await addSection('Challenge', [
        `${challenge?.text_ch || ''}`
      ], [
        `${challenge?.image_ch || ''}`,
      ]);

      await addSection('Case Detail', [
        `${casedetail?.text_detail || ''}`
      ], [
        `${casedetail?.image_detail || ''}`,
      ]);

      await addSection('Improvement', [
        `${improvement?.text_imp || ''}`
      ], [
        `${improvement?.image_imp || ''}`,
      ]);

      await addSection('Technology', [
        `${technology?.text_tech || ''}`
      ], [
        `${technology?.image_tech || ''}`,
      ]);
    }

    doc.save('success_case_details.pdf');
  };

  if (!actualSuccessCase) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Button
        disableElevation
        variant="contained"
        size="small"
        sx={{
          height: '2rem',
          marginTop: '2rem',
          marginLeft: '2rem',
          backgroundColor: '#BFD52E',
          color: 'white',
          '&:hover': {
            backgroundColor: '#6a8b06',
          },
        }}
        aria-label="Generate PDF"
        onClick={generatePDF}
      >
        Generate PDF
      </Button>
    </div>
  );
};

export default GeneratePDF;
