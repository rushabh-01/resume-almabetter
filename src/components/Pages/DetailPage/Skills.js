import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../../contexts/ResumeContext";
import {Link} from "react-router-dom";

function Skills() {
  const { content, updateAdditionalData, removeFakeData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Save");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateAdditionalData(data);
    setBtnText("Save changes");
  };

  return (
    <div className="">
      <h2>Additional Skills</h2>
      <form
        style={{  display: 'flex',
        flexDirection: 'column'}}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label=""
          name="skill1"
          variant="outlined"
          defaultValue={content.additional[0]}
          inputRef={register({
            max: {
              value: 3,
              message: "error message", // <p>error message</p>
            },
          })}
          // onChange={handleSubmit(onSubmit)}
          style={{margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label=""
          name="skill2"
          variant="outlined"
          defaultValue={content.additional[1]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label=""
          name="skill3"
          variant="outlined"
          defaultValue={content.additional[2]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label=""
          name="skill4"
          variant="outlined"
          defaultValue={content.additional[3]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label=""
          name="skill5"
          variant="outlined"
          defaultValue={content.additional[4]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{margin: 12}}
        />
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <Link to="/detail/education">
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
          color="secondary"
          type="submit"
          style={{background: "linear-gradient(177.9deg, rgb(58, 62, 88) 3.6%, rgb(119, 127, 148) 105.8%)",color:"white",margin:"8px" }}
        >
          {btnText}
        </Button>
        </div>
      </form>
    </div>
  );
}

export default Skills;
