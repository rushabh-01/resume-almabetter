import React, { useContext } from "react";
import { ResumeContext } from "../../../../contexts/ResumeContext"
import styled from 'styled-components'

function EducationPreview() {
  const { content, control, contentFake } = useContext(ResumeContext);

  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  let title;
  if (Object.keys(contentUse.education).length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Education</strong>
      </h3>
    );
  }

  let Apply;
  if (!contentUse.education.additional) {
    Apply = "";
  } else {
    Apply = (
      <ul>
        <li>{contentUse.education.additional}</li>
      </ul>
    );
  }

  return (
    <Resume>
      <div>
        {title}
        <p>
          <strong>{contentUse.education.institution} </strong>{" "}
          {contentUse.education.city}
        </p>
        <p>
          {contentUse.education.major} {contentUse.education.gradYear}
        </p>
        {Apply}
      </div>
    </Resume>
  );
}

const Resume = styled.div`
display: flex;
flex-direction: column;
margin:0 60px;
`

export default EducationPreview;
