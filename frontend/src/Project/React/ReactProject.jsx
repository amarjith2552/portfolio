import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { motion } from 'framer-motion'
import img6 from '../img2/discount calculator.png'
import img7 from '../img2/contact app.png'
import img8 from '../img2/dr.appointment.png'
import img9 from '../img2/weather app.png'


function ReactProject() {
  return (
    <div>
        <Stack direction={'row'} gap={1} justifyContent={'start'} flexWrap={'wrap'}>
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
              <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
                
                <img width={'100%'} height={'100%'}  src={img6} alt="Discount Calculator" />
                
              </motion.div>
             <h6 style={{textAlign:'center',padding:'10px',margin:'8px'}} fontSize={15} component={'p'} color={'light'} textAlign={'center'} py={2} >Discount Calculator</h6>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'} src={img9} alt="EMI calculator" />
              </motion.div>
              <h6 style={{textAlign:'center',padding:'10px',margin:'8px'}} fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py ={2}>Weather App</h6>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'}  src={img7} alt="Random Quotes Generator" />
              </motion.div>
              <h6 style={{textAlign:'center',padding:'10px',margin:'8px'}} fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} >Contact app</h6>
           </Box>
           
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240}>
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'}  src={img8} alt="Doctor Appoiment Booking" />
              </motion.div>
              <h6 style={{textAlign:'center',padding:'10px',margin:'8px'}} fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} >Doctor Appointment</h6>
           </Box>

           
        </Stack>
    </div>
  )
}

export default ReactProject