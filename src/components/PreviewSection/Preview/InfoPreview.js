import React, { useContext } from "react";
import { ResumeContext } from "../../../contexts/ResumeContext";
import styled from 'styled-components'

function InfoPreview() {
  const { content, control, contentFake } = useContext(ResumeContext);

  //If the "control" is TRUE - use "Fake State" to show the example on the page
  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  let divider;
  if (Object.keys(contentUse.header).length > 0) {
    divider = <hr style={{margin: "25px 0"}}/>;
  } else {
    divider = "";
  }

  return (
    <div>
      <Resume>
        <Start>
          <Flex>
            <div style={{display:"block"}}>
            <h1 sx={{textTransform: 'uppercase'}}>{contentUse.header.name}</h1>
            <h4>{contentUse.header.role}</h4>
            </div>
          <p>
            
            <br />
            {contentUse.header.phone}
            <br />
            {contentUse.header.email}
          </p>
          </Flex>
          <br />
          <p>{contentUse.header.summary}</p>
          {divider}
        </Start>
      </Resume>
    </div>
  );
}

const Start = styled.div`
width:inherit;
`

const Flex = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
padding: 60px 20px 20px;
`

const Resume = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
text-align: center;
`


export default InfoPreview;
