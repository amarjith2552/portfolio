import { Box, Stack, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { motion } from 'framer-motion'
import img3 from '../img2/calculator.png'
import React from 'react'
import img4 from '../img2/bmi calculator.png'
import img5 from '../img2/bank.png'
import bd from '../img2/budget calculator.png'
import movie from '../img2/movie search.png'
import car from '../img2/car.png'


function JavaScript() {
  return (
    <div>
        <Stack direction={'row'} gap={1} justifyContent={'start'} flexWrap={'wrap'}>
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
              <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
                
                <img width={'100%'} height={'100%'}  src={img3} alt="Calculator" />
                
              </motion.div>
             <h6 style={{textAlign:'center',padding:'10px',margin:'8px'}} fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} >Calculator</h6>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'} src={img4} alt="" />
              </motion.div>
              <h6 style={{textAlign:'center',padding:'10px',margin:'8px'}} fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py ={2}>BMI calculator</h6>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'}  src={img5} alt="Employee Mangement" />
              </motion.div>
              <h6 style={{textAlign:'center',padding:'10px',margin:'8px'}} fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} >Bank page</h6>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'}  src={bd} alt="Budget Calculator" />
              </motion.div>
              <h6 style={{textAlign:'center',padding:'10px',margin:'8px'}} fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} >Budget Calculator</h6>
           </Box>
           
           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'}  src={movie} alt="Movie Details Fetch" />
              </motion.div>
              <h6 style={{textAlign:'center',padding:'10px',margin:'8px'}} fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} >Movie Details Fetch</h6>
           </Box>

           <Box borderRadius={2} overflow={'hidden'} width={360} height={240} >
            <motion.div style={{width:'100%',height:'80%'}} whileHover={{scale:1.1}} transition={{duration:0.2}}>
              <img width={'100%'} height={'100%'}  src={car} alt="Movie Details Fetch" />
              </motion.div>
              <h6 style={{textAlign:'center',padding:'10px',margin:'8px'}} fontSize={15} component={'p'} color={'light'}  textAlign={'center'} py={2} >car world</h6>
           </Box>

           
        </Stack>
    </div>
  )
}

export default JavaScript