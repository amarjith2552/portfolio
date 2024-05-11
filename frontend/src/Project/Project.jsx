import { Box, Container, Tabs,Tab, Typography, AppBar, createTheme, ThemeProvider } from '@mui/material'
import {  deepOrange } from '@mui/material/colors'
import React, { useState } from 'react'
import HtmlCss from './HtmlCss/HtmlCss'
import JavaScript from './JavaScript/JavaScript'
import ReactProject from './React/ReactProject'
import './Project.css'
import { blueGrey} from '@mui/material/colors'
import { motion } from 'framer-motion'

function Project({mode}) {
  const theme = createTheme({
    palette: {
    secondary: {
      main: mode?deepOrange[500]:deepOrange[900],
    },
  },
  });
  const [value,setValue] =useState(0)
  const handleTabs=(e,val)=>{
      setValue(val)
  }
  return (
    <div style={{color:'white'}} className='projectSection'>
    <ThemeProvider theme={theme}>
    <Box sx={{width: "100%",py:3, bgcolor: mode?blueGrey[900]:blueGrey[1000]}}>
       <motion.h1 initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.10' }} viewport={{ once: true }} style={{color:'white',textAlign:'center'}}>Projects</motion.h1> 
        <Container  sx={{my:2,minHeight:'80vh'}}>
         <AppBar style={{backgroundColor:'black'}} position='static'>
         <Tabs 
         textColor="light" value={value} centered onChange={handleTabs}>
            <Tab  label='HTML & CSS'  />
            <Tab label='JavaScript' />
            <Tab label='React' />
         </Tabs>
         </AppBar>
          <TabPanel value={value} index={0}>
            <Box width={'100%'}  p={3}>
            <HtmlCss />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <Box width={'100%'}  p={3}>
            <JavaScript/>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <Box width={'100%'}  p={3}>
            <ReactProject />
            </Box>
          </TabPanel>   
        </Container>
    </Box>
   </ThemeProvider>
    </div>
  )
}
function TabPanel(props)
{
  const {children,value,index} = props
  return(
    <div>
      {
        value==index&&(
          <h1>{children}</h1>
        )
      }
    </div>
  )
}

export default Project