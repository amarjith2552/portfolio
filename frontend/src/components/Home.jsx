import React from 'react'
import img from '../pics/main.png'
import { TypeAnimation } from 'react-type-animation';
import { blueGrey, deepOrange,} from '@mui/material/colors'
import { Box } from '@mui/material';
import '../components/Home.css'
import { motion } from 'framer-motion';

function Home({mode}) {

  return (
    <Box sx={{width: "100%",py:3, bgcolor: mode?blueGrey[900]:blueGrey[1000]}}>
<div style={{color:'white'}} className='p-5 m-3'>
      <div className="container">
        <div className="row">
          
          <div className="col-6 m-5 p-4">
            <motion.h5 whileInView={{x:0,opacity:1,scale:1.0}} initial={{x:-100,opacity:0,scale:1.0}} transition={{duration:.4}} style={{color:'gray'}}>Hi,My Name is</motion.h5>
            <motion.h1 initial={{ x: '100px', opacity: '0' }} whileInView={{ x: '0px', opacity: '1' }} transition={{ duration:.5 }} viewport={{ once: true }}>Amarjith M</motion.h1>
            <motion.h2 whileInView={{x:0,opacity:1,scale:1.0}} initial={{z:-100,opacity:0,scale:1.0}} transition={{duration:.6}} style={{color:'lightskyblue',fontSize:'25px'}}  aria-label="Hi! I'm a developer">I am a
                  <TypeAnimation
      sequence={[
        ' Front End Developer',
        2300,
        ' Back End Developer',
        2300
      ]}
      wrapper="span"
      speed={1}
      style={{ fontSize: {xs:16,md:24}, display: 'inline'}}
      repeat={Infinity}
    />
               
                
                  </motion.h2>
           
  
            <motion.p initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '1.0' }} viewport={{ once: true }} style={{color:'grey',textAlign:'justify'}}>Well-qualified ME(A)RN Stack Developer familiar with wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements.</motion.p>
            <motion.button  whileInView={{x:0,opacity:1,scale:1.0}} initial={{x:-100,opacity:0,scale:1.0}} transition={{duration:'1.3'}}  style={{backgroundColor:'red',color:'white'}} className='btn rounded'>Contact Me</motion.button>
          </div>
          <div style={{marginTop:'-30px'}} className="hi col-5">
            <motion.img initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '1.6' }} viewport={{ once: true }} src={img} width={'100%'} alt="" />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
    </Box>
    
  )
}

export default Home