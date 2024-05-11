import React from 'react'
import img from '../pics/1.jpg'
import { TypeAnimation } from 'react-type-animation';
import { blueGrey, deepOrange,} from '@mui/material/colors'
import { Box } from '@mui/material';
import {
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { motion } from 'framer-motion';
  
function About({mode}) {
  return (
    <Box sx={{width: "100%",py:3, bgcolor: mode?blueGrey[900]:blueGrey[1000]}}>

    <div className='p-3 m-2' >
        <div className="container">
            <div className="row">
                <div  className="col-6 text-center p-3">
                    <img  style={{border:'3px solid',margin:'10px'}} className='rounded shadow' src={img} width={'400px'} alt="" />
                </div>
                <div className="col-6 rounded shadow p-4">
                  
                    <motion.h5 initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.20' }} viewport={{ once: true }} style={{color:'gray',marginTop:'30px'}}>About Me</motion.h5>
                    <motion.h2 initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.50' }} viewport={{ once: true }} style={{color:'whitesmoke'}}>Amarjith M</motion.h2>
                    <motion.h4 initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.80' }} viewport={{ once: true }}>Proffesional MEARN Developer</motion.h4>
                    <motion.p initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '1.1' }} viewport={{ once: true }} style={{color:'grey',textAlign:'justify'}}>I am a passionate and results-driven MEARN (MongoDB, Express.js, Angular,React, Node.js) developer with a strong foundation in full-stack web development. My journey in the world of programming began with a fascination for creating interactive and dynamic web applications. Over the years, I've honed my skills and accumulated valuable experience that has allowed me to craft robust and efficient solutions.</motion.p>
                    <h6>Follow me-</h6>

                    <motion.section initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '1.2' }} viewport={{ once: true }} className='mb-3'>
          <MDBBtn  floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='whatsapp' />
          </MDBBtn>
 
          <MDBBtn  floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn  floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn  floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
                    </motion.section>

<a href='cv.pdf' download>
          <motion.button initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '1.2' }} viewport={{ once: true }} style={{backgroundColor:'red',color:'white'}} className='btn rounded'>Download CV</motion.button>
  
</a>
                </div>
            </div>
        </div>
    </div>
    </Box>
  )
}

export default About

