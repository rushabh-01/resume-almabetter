import React from "react";
import InfoPreview from "./InfoPreview";
import WorkPreview from "./WorkPreview";
import EducationPreview from "./EducationPreview";
import SkillsPreview from "./SkillsPreview";

function Output() {
  return (
    <div className="">
      <div size="A4" className="page">
        <InfoPreview />
        <WorkPreview />
        <EducationPreview />
        <SkillsPreview />
      </div>
    </div>
  );
}

export default Output;
