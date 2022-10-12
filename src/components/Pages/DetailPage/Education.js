import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../../contexts/ResumeContext";
import {Link} from "react-router-dom";

function Education() {
  const { content, updateEducationData, removeFakeData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Save");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateEducationData(data);
    setBtnText("Save changes");
  };

  return (
    <div className="">
      <h2>Education</h2>
      <form
        style={{  display: 'flex',
        flexDirection: 'column'}}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label="Institution"
          name="institution"
          variant="outlined"
          defaultValue={content.education.institution}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="City, State, Country"
          name="city"
          variant="outlined"
          defaultValue={content.education.city}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="Major"
          name="major"
          variant="outlined"
          defaultValue={content.education.major}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="Graduation Year"
          name="gradYear"
          variant="outlined"
          defaultValue={content.education.gradYear}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="Additional Info"
          name="additional"
          variant="outlined"
          defaultValue={content.education.additional}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />
        <div style={{display:"flex"}}>
        <Link to="/detail/work">
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ margin: 8 }}
        >
          Back
        </Button></Link>
        <Button
          variant="contained"
          type="submit"
          style={{background: "linear-gradient(177.9deg, rgb(58, 62, 88) 3.6%, rgb(119, 127, 148) 105.8%)",color:"white",display:"block",margin:"auto" }}
        >
          {btnText}
        </Button>
        <Link to="/detail/skills">
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ margin: 8 }}
        >
          Next
        </Button></Link>
        </div>
      </form>
    </div>
  );
}

export default Education;
