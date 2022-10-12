import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../../contexts/ResumeContext";
import {Link} from "react-router-dom";

function Work() {
  const { content, updateProfessionalData, removeFakeData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Save");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateProfessionalData(data);
    setBtnText("Save changes");
  };
  return (
    <div className="">
      <h2>Work Experience</h2>
      <form
        style={{  display: 'flex',
          flexDirection: 'column'}}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <h4>Company 1</h4>
        <TextField
          id="outlined-basic"
          label="Company"
          name="company1"
          variant="outlined"
          defaultValue={content.professional.company1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="City, State, Country"
          name="local1"
          variant="outlined"
          defaultValue={content.professional.local1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="Position"
          name="position1"
          variant="outlined"
          defaultValue={content.professional.position1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="Start MM/YYYY"
          name="start1"
          variant="outlined"
          defaultValue={content.professional.start1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="End MM/YYYY"
          name="end1"
          variant="outlined"
          defaultValue={content.professional.end1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="Description"
          name="desc1[0]"
          variant="outlined"
          defaultValue={content.professional.desc1[0]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc1[1]"
          variant="outlined"
          defaultValue={content.professional.desc1[1]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc1[2]"
          variant="outlined"
          defaultValue={content.professional.desc1[2]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{
            marginTop: 12,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 15,
          }}
        />

        <hr />

        <h4>Company 2</h4>

        <TextField
          id="outlined-basic"
          label="Company"
          name="company2"
          variant="outlined"
          defaultValue={content.professional.company2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="City, State, Country"
          name="local2"
          variant="outlined"
          defaultValue={content.professional.local2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="Position"
          name="position2"
          variant="outlined"
          defaultValue={content.professional.position2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="Start MM/YYYY"
          name="start2"
          variant="outlined"
          defaultValue={content.professional.start2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="End MM/YYYY"
          name="end2"
          variant="outlined"
          defaultValue={content.professional.end2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="Description"
          name="desc2[0]"
          variant="outlined"
          defaultValue={content.professional.desc2[0]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc2[1]"
          variant="outlined"
          defaultValue={content.professional.desc2[1]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc2[2]"
          variant="outlined"
          defaultValue={content.professional.desc2[2]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />
        <div style={{display:"flex"}}>
        <Link to="/detail/info">
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
          style={{background: "linear-gradient(177.9deg, rgb(58, 62, 88) 3.6%, rgb(119, 127, 148) 105.8%)",color:"white",display:"block",margin:"auto" }}
        >
          {btnText}
        </Button>
        <Link to="/detail/education">
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

export default Work;
