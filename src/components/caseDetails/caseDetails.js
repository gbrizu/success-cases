import { Grid, Button, Container } from "@mui/material";
import "../../App.css";
import CaseDetailsInfo from "./caseDetailsInfo";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CaseViewContextProvider } from "../../context/casesView.context";

export default function CaseDetails({ successCase }) {
  const { navigate, setSuccessCase } = useContext(
    CaseViewContextProvider
  );


  const { id } = useParams();

  const succesCase = {
    id: 1,
    title: "Ejemplo de Caso de Éxito 1",
    startdate: "2024-02-29",
    finishdate: "2024-03-10",
    teamsize: 20,
    ispublic: true,
    industryid: 3,
    clientid: 1,
    projecttypeid: 3,
    contactid: 1,
    casedetailsid: 1,
    offeringid: 1,
    technologyid: 1,
    challengeid: 1,
    improvementid: 1,
    Industry: {
      id: 3,
      name: "Healthcare"
    },
    ProjectType: {
      id: 3,
      name: "Software Development"
    },
    Client: {
      name: "Matias",
      surname: null,
      email: null,
      id: 1
    },
    Contact: {
      id: 1,
      name: "German",
      surName: "A",
      email: "GermanA@gmail.com"
    },
    Offering: {
      id: 1,
      name: "Offering 1",
      description: "Description 1"
    },
    CaseDetail: {
      id: 1,
      image_detail: "imagen.jpg",
      video_detail: "video.mp4",
      text_detail: "Lorem ipsum dolor "
    },
    Technology: {
      id: 1,
      image_tech: "aaaaaaaaaaaaa.jpg",
      video_tech: "eaaaaaeo.mp4",
      text_tech: "Taaaaaaogía 1"
    },
    Improvement: {
      id: 1,
      image_imp: "ebbbbbmg.jpg",
      video_imp: "ejbbbeo.mp4",
      text_imp: "Tebbbbba 1"
    },
    Challenge: {
      id: 1,
      image_ch: "eccccccg.jpg",
      video_ch: "ejcccccceo.mp4",
      text_ch: "cccccc"
    }
  };


  useEffect(() => {
    let succesCase2 = {
      id: id,
      title: "Ejemplo de Caso de Éxito 1",
      startdate: "2024-02-29",
      finishdate: "2024-03-10",
      teamsize: 20,
      ispublic: true,
      industryid: 3,
      clientid: 1,
      projecttypeid: 3,
      contactid: 1,
      casedetailsid: 1,
      offeringid: 1,
      technologyid: 1,
      challengeid: 1,
      improvementid: 1,
      Industry: {
        id: 3,
        name: "Healthcare"
      },
      ProjectType: {
        id: 3,
        name: "Software Development"
      },
      Client: {
        name: "Matias",
        surname: null,
        email: null,
        id: 1
      },
      Contact: {
        id: 1,
        name: "German",
        surName: "A",
        email: "GermanA@gmail.com"
      },
      Offering: {
        id: 1,
        name: "Offering 1",
        description: "Description 1"
      },
      CaseDetail: {
        id: 1,
        image_detail: "imagen.jpg",
        video_detail: "video.mp4",
        text_detail: "Lorem ipsum dolor "
      },
      Technology: {
        id: 1,
        image_tech: "aaaaaaaaaaaaa.jpg",
        video_tech: "eaaaaaeo.mp4",
        text_tech: "Taaaaaaogía 1"
      },
      Improvement: {
        id: 1,
        image_imp: "ebbbbbmg.jpg",
        video_imp: "ejbbbeo.mp4",
        text_imp: "Tebbbbba 1"
      },
      Challenge: {
        id: 1,
        image_ch: "eccccccg.jpg",
        video_ch: "ejcccccceo.mp4",
        text_ch: "cccccc"
      }
    };
    setSuccessCase(succesCase2)
  }, [])




  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
      <div style={{ width: "auto", padding: "2rem", border: "solid", marginTop: "5rem" }}>
        <h1 style={{ fontSize: "4.5rem", color: "red", textAlign: "center" }}>Success Case Details</h1>

        <CaseDetailsInfo label={"Client"} info={succesCase.Client.name}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Industry"} info={succesCase.Industry.name}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Project type"} info={succesCase.ProjectType.name}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Offering"} info={succesCase.Offering.name}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Date"} info={succesCase.startdate + " - " + succesCase.finishdate}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Project contact"} info={succesCase.Contact.email}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Avg. Team size"} info={succesCase.teamsize}></CaseDetailsInfo>

        <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "space-between" }}>
          <Link to={"/"}>
            <Button
              variant="contained"
              style={{ marginRight: "100px" }}
            >
              Back
            </Button>
          </Link>

          <Button
            variant="contained"
            style={{ marginLeft: "100px" }}
            onClick={() => {
              navigate('viewSuccessCaseDescription')
            }}
          >
            Next
          </Button>

        </div>
      </div>
    </div>
  );
}

