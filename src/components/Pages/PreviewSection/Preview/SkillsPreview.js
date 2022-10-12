import React, { useContext } from "react";
import { ResumeContext } from "../../../../contexts/ResumeContext"
import styled from 'styled-components'

function SkillsPreview() {
  const { content, control, contentFake } = useContext(ResumeContext);

  //If the "control" is TRUE - use "Fake State" to show the example on the page
  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  //If there is no data, the Title of the section will not be displayed
  let title;
  if (contentUse.additional.length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Skills</strong>
      </h3>
    );
  }

  let Apply = contentUse.additional.map((x, index) => {
    if (x === "") {
      return "";
    } else {
      return <li key={index}>{x}</li>;
    }
  });
  return (
    <Resume>
      <div>
        {title}
        <ul>{Apply}</ul>
      </div>
    </Resume>
  );
}

const Resume = styled.div`
display: flex;
flex-direction: column;
margin:0 60px; 
`

export default SkillsPreview;
