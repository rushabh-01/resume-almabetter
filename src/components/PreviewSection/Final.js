import React, { useContext } from "react";
import Output from "./Preview/Output";
import { makeStyles } from "@material-ui/core/styles";
import { green, pink } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "@material-ui/core";
import { ResumeContext } from "../../contexts/ResumeContext";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    "& > *": {
      margin: 0,
    },
    fontFamily:'Montserrat',
    '@media(max-width: 780px)' : {
      justifyContent:"center"
    }
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    margin: 10,
    padding:10,
    borderRadius:4,
    textDecoration:"none"
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
    margin: 10,
    padding:10,
    borderRadius:4,
  },
  example: {
    background: "linear-gradient(135deg, #005AA7 0%, #FFFDE4 150%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #F2F3F4",
    color: "white",
    height: 39,
    textAlign: "center",
    margin: 10,
  },
  headerLink: {
    color: "#0298B8 ",
  },
  heading:{
    textAlign:"center",
    fontFamily:"Montserrat",
    '@media (max-width: 768px)': {
      margin: 50,
    },
  }
}));

function Final() {
  const { setContent,control, addFakeData, removeFakeData } = useContext(ResumeContext);
  const classes = useStyles();
  const handleDeleteDate = (event) => {
    event.preventDefault();
    localStorage.clear();
    setContent({
      header: {},
      professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
      education: {},
      additional: [],
    });
  };
  const handleSaveToPDF = (event) => {
    event.preventDefault();
    window.print();
  };

  function useFakeData(e) {
    e.preventDefault();
    addFakeData();
  }

  function clearFakeData(e) {
    e.preventDefault();
    removeFakeData();
  }

  let expData;
  if (control) {
    expData = (
      <Button
        color="secondary"
        onClick={clearFakeData}
        className={classes.example}
      >
        remove example
      </Button>
    );
  } else {
    expData = (
      <Button
        color="primary"
        onClick={useFakeData}
        className={classes.example}
      >
        example
      </Button>
    );
  }

  return (
    <div className="right">
      <div className={classes.root}>
        <Link href="#" onClick={handleDeleteDate} style={{textDecoration: 'none'}}>
          <Tooltip title="Delete All Data" placement="right">
            <div className={classes.pink}>
              {/* <ClearIcon /> */}
              CLEAR
            </div>
          </Tooltip>
        </Link>
        <Link href="#" onClick={handleSaveToPDF} style={{textDecoration: 'none'}}>
          <Tooltip title="Save to PDF" placement="right">
            <div className={classes.green}>
              {/* <PictureAsPdfIcon /> */}
              PDF
            </div>
          </Tooltip>
        </Link>
        <div styles={{ flexGrow: 1 }}>{expData}</div>
      </div>
      <Output/>
    </div>
  );
}

export default Final;
