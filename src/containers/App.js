import React,{useState,useEffect} from "react";
import Form from "../components/Pages/DetailPage/Form";
import Navbar from '../components/Navbar';
import "./styles.css";
import ResumeContextProvider from "../contexts/ResumeContext";
import {Route, Switch, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import About from "../components/Pages/About";
import styled from "styled-components";
import Animation from "../components/Animation";
import { Button } from "@material-ui/core";
import Footer from "../components/Footer";

const skinCodes = ['skin1', 'skin2', 'skin3','skin4' ]; 

function Templates() {
  const useStyles = makeStyles({
    headerLink: {
      color: "black",
      minWidth: 100,
      position:"relative",
      margin:15,
      background:"white",
      opacity:0.5,
    },
  });

  const classes = useStyles();

  const [isShown, setIsShown] = useState(false);

  return (
    <div className="left">
      <h2 style={{textAlign:'center'}}>Build your brand-new resume in as little as 5 minutes.</h2>
      <h4 style={{textAlign:'center'}}>Chosse a template</h4>
      <Card>
      {skinCodes.map((value,index) =>(
          <Link to='/detail/info' key={index}>
            <TemplateCard  onMouseEnter={() => setIsShown(index)} onMouseLeave={() => setIsShown(false)}>
                <img src={value + '.svg'} alt="" className="templateImage"/>
                {isShown === index && (<Button variant="contained" className={classes.headerLink}>use template</Button>)}
            </TemplateCard>
          </Link>
        ))}
      </Card>
    </div>
  );
}

function App() {

  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    window.innerWidth < 768 ? setMobile(true) : setMobile(false);
  }, [mobile]);

  return (
    
    <div className="app">
      <Animation/>
      <ResumeContextProvider>
      
        
        <Navbar/>
        
          <Switch>
            <Route path="/" component={Templates} exact />
            <Route path="/detail" component={Form} />
            <Route path="/about" component={About} />
          </Switch>

          {mobile ? <Footer/> : "" }
        
      </ResumeContextProvider>
    
      
      </div>
  );
}

const Card = styled.div`
display: flex;
margin: 25px;
justify-content: space-evenly;
flex-wrap: wrap;
`
const TemplateCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media (max-width:768px){
  margin:20px 0;
}
`



export default App;
