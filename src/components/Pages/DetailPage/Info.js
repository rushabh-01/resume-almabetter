import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../../contexts/ResumeContext";
import { Button } from "@material-ui/core";
import {Link} from "react-router-dom";

function Info() {
  const { content, updateHeaderData, removeFakeData } = useContext(
    ResumeContext
  );

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateHeaderData(data);
  };

  return (
    <div className="">
      <h2>Personal Info</h2>
      <form
        style={{  display: 'flex',
        flexDirection: 'column'}}
        noValidate
        autoComplete="off"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label="Full Name"
          name="name"
          variant="outlined"
          defaultValue={content.header.name}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="Role"
          name="role"
          variant="outlined"
          defaultValue={content.header.role}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="Phone"
          name="phone"
          variant="outlined"
          defaultValue={content.header.phone}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-basic"
          label="E-mail"
          name="email"
          variant="outlined"
          defaultValue={content.header.email}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ margin: 12}}
        />

        <TextField
          id="outlined-multiline-static"
          label="Summary"
          name="summary"
          multiline
          rows={7}
          variant="outlined"
          defaultValue={content.header.summary}
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{
            marginTop: 20,
            marginBottom: 15,
            marginLeft: 8,
            marginRight: 8,
          }}
        />
        <Link to="/detail/work">
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ margin: 8 }}
        >
          Next
        </Button></Link>
      </form>
    </div>
  );
}

export default Info;
