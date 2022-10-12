import React from "react";
import Info from "./Info";
import Work from "./Work";
import Education from "./Education";
import Skills from "./Skills";
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Final from "../PreviewSection/Final"
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({

  navLinks: {
    color: "#0298B8 ",
  },
  heading:{
    textAlign:"center",
    '@media (max-width: 768px)': {
      marginTop: 50,
      marginBottom:25,
    },
  }
});

function Form() {

  const classes = useStyles();

  return (
    <div className="left">
      <h2 className={classes.heading}>Resume Detail</h2>
      <Flex>
        <Router>
          <Block>
          <Nav2>
            <Button
              className={classes.navLinks}
              component={Link}
              to="/detail/info"
            >
              Personal Info
            </Button>
            <Button
              className={classes.navLinks}
              component={Link}
              to="/detail/work"
            >
              Work
            </Button>
            <Button
              className={classes.navLinks}
              component={Link}
              to="/detail/education"
            >
              Education
            </Button>
            <Button
              className={classes.navLinks}
              component={Link}
              to="/detail/skills"
            >
              Skills
            </Button>
          </Nav2>
          <div>
            <hr/>
            <FormArea>
              <Switch>
                <Route path="/detail/info">
                  <Info />
                </Route>
                <Route path="/detail/work">
                  <Work />
                </Route>
                <Route path="/detail/education">
                  <Education />
                </Route>
                <Route path="/detail/skills">
                  <Skills />
                </Route>
              </Switch>
            </FormArea>
          </div>
          </Block>
        </Router>
        <Final/>
      </Flex>
    </div>
  );
}

const Block = styled.div`
display:block;
width:45%;
@media(max-width:768px){
  width:100%;
}
`
const Flex = styled.div`
display:flex;
justify-content: space-evenly;
@media(max-width:768px){
  display:block;
}
`

const Nav2 = styled.div`
display: flex;
padding: 15px;
text-align: center;
justify-content: space-between;
`

const FormArea = styled.div`
margin: 25px;
`

export default Form;
