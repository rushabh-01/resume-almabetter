import React, { useContext } from "react";
import { ResumeContext } from "../../../../contexts/ResumeContext"
import styled from 'styled-components'

function WorkPreview() {
  const { content, control, contentFake } = useContext(ResumeContext);

    //if the control is TRUE - use dummyData to show the example on the page
  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  let title;
  if (Object.keys(contentUse.professional).length < 3) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Work Experience</strong>
      </h3>
    );
  }

  let Row1 = contentUse.professional.desc1.map((x, index) => {
    if (x === "") {
      return "";
    } else {
      return <li key={index}>{x}</li>;
    }
  });

  let Row2 = contentUse.professional.desc2.map((x, index) => {
    if (x === "") {
      return "";
    } else {
      return <li key={index}>{x}</li>;
    }
  });

  return (
    <div className="work">
    <Resume>
      <div>
        {title}
        <p>
          <strong>{contentUse.professional.company1}</strong>{" "}
          {contentUse.professional.local1}
        </p>
        <p>
          {contentUse.professional.position1} {contentUse.professional.start1}{" "}
          {contentUse.professional.end1}
        </p>
        <ul>{Row1}</ul>
        <p>
          <strong>{contentUse.professional.company2}</strong>{" "}
          {contentUse.professional.local2}
        </p>
        <p>
          {contentUse.professional.position2} {contentUse.professional.start2}{" "}
          {contentUse.professional.end2}
        </p>
        <ul>{Row2}</ul>
      </div>
    </Resume>
    </div>
  );
}

const Resume = styled.div`
display: flex;
flex-direction: column;
margin:0 60px;
width:unset;
`

export default WorkPreview;
