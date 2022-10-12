import React,{useState} from 'react'
import "../../containers/styles.css"
import {Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const skinCodes = ['skin1', 'skin2', 'skin3','skin4' ]; 

const Home = () => {
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
          <h2 style={{textAlign:'center'}}>Choose a template</h2>
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

export default Home