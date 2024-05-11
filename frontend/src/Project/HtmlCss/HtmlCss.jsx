import { Box, Stack, Typography } from '@mui/material'
import {  blueGrey } from '@mui/material/colors'
import { motion } from 'framer-motion'
import React from 'react'
import img1 from '../img2/restaurant.png'
import img2 from '../img2/travel.png'

function HtmlCss() {
  return (
    <>
        <Stack direction={'row'} gap={1} justifyContent={'start'} flexWrap={'wrap'}>
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
              <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
                
                <img width={'100%'} height={'100%'}  src={img1} alt="Jeff Bezos Portfolio" />
                
              </motion.div>
             <h6 style={{textAlign:'center',padding:'10px',margin:'8px'}} fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} > restaurent website</h6>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'} src="https://i.postimg.cc/gkXsfy5x/Luminar.png" alt="Luminar Web Page" />
              </motion.div>
              <h6 style={{textAlign:'center',padding:'10px',margin:'8px'}} fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py ={2}> Luminar Web Page</h6>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'}  src={img2} alt="Travel Blog" />
              </motion.div>
              <h6 style={{textAlign:'center',padding:'10px',margin:'8px'}} fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} > Travel Blog</h6>
           </Box>

           
        </Stack>
    </>
  )
}

export default HtmlCss