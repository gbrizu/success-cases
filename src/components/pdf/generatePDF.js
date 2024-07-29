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

  const generatePDF = () => {
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

    const addSection = (title, content) => {
      if (content) {
        doc.setFontSize(14);
        doc.setTextColor('#BFD52E');
        doc.text(title, leftMargin, yPos);
        yPos += lineHeight;

        doc.setFontSize(12);
        doc.setTextColor('#000000');
        content.forEach(text => {
          doc.text(text, leftMargin, yPos);
          yPos += lineHeight;
        });

        yPos += 5; 
      }
    };

    if (actualSuccessCase) {
      addSection('General Information', [
        `Title: ${actualSuccessCase.title}`,
        `Date: ${actualSuccessCase.startdate} - ${actualSuccessCase.finishdate}`,
        `Team size: ${actualSuccessCase.teamsize}`,
        `Public: ${actualSuccessCase.ispublic ? 'Yes' : 'No'}`,
        `Client: ${actualSuccessCase.Client ? actualSuccessCase.Client.name : ''}`,
        `Industry: ${actualSuccessCase.Industry ? actualSuccessCase.Industry.name : ''}`,
        `Project type: ${actualSuccessCase.ProjectType ? actualSuccessCase.ProjectType.name : ''}`,
        `Offering: ${actualSuccessCase.Offering ? actualSuccessCase.Offering.name : ''}`,
        `Project contact: ${actualSuccessCase.Contact ? actualSuccessCase.Contact.email : ''}`,
        
      ]);

      addSection('Challenge', [
        `${challenge?.text_ch || ''}`,
        `${challenge?.image_ch || ''}`,
        //`Video: ${challenge?.video_ch || ''}`
      ]);

      addSection('Case Detail', [
        `${casedetail?.text_detail || ''}`,
        `${casedetail?.image_detail || ''}`,
        //`Video: ${casedetail?.video_detail || ''}`
      ]);

      addSection('Improvement', [
        `${improvement?.text_imp || ''}`,
        `${improvement?.image_imp || ''}`,
        //`Video: ${improvement?.video_imp || ''}`,
      ]);

      addSection('Technology', [
        `${technology?.text_tech || ''}`,
        `${technology?.image_tech || ''}`,
        //`Video: ${technology?.video_tech || ''}`,
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
