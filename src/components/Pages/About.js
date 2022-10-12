import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <>
    <Container>
      <h1>Resume Builder</h1>
      <h4>EasyyResume is your ultimate career toolbox.</h4>
      <p style={{letterSpacing: 0.5,wordSpacing: 1.2,lineHeight:"25px"}}>
        We offer you the best online resume builder.The website aims to make applying for a job fast and easy, for everyone. We believe that seasoned professionals and inexperienced candidates alike should be able to apply for any job they want, without being limited by their resume-making skills. We are committed to helping you every step along the way to your dream career.</p>
    </Container>
    </>
  )
}

const Container = styled.div`
padding:50px;
position:relative;
`

export default About