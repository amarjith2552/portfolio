import React from 'react'
import {Col} from 'react-bootstrap'
import '../Pages/Skills.css'
import { TypeAnimation } from 'react-type-animation';
import { blueGrey, deepOrange,} from '@mui/material/colors'
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
function Skills({mode}) {
  return (
    <Box sx={{width: "100%",py:3, bgcolor: mode?blueGrey[900]:blueGrey[1000]}}>

    <div style={{color:'white'}} className='p-3 m-2'>
        <div className="container">
            <div className="row">
                
                <div className="col-6 rounded shadow">
                        <motion.h1 initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.30' }} viewport={{ once: true }} className='text-center p-3 m-2'>Skills</motion.h1>
                    <div style={{gap:'4.0vh',display:'flex'}} sm={12} md={6} lg={4} xl={3} className="p-4 m-2">
                        
                           <div className='row text-center m-2' >
                               <div  className=' hi rounded shadow p-2 m-2'>
                                    <img src="https://abhishek7356.github.io/My-Portfolio/static/media/HTML5_badge.dbc3baa7e405494219e6.png" alt="" width={'100px'} /> <h5 className=' p-2 m-2' >Html</h5> 
                                    </div>
        
                                    <div className='hi rounded shadow p-2 m-2'>
                                    <img src="https://www.softorks.com/Images/css.jpg" alt="" width={'100px'} /> <h5 className=' p-2 m-2'>css</h5> 
                                    </div>
        
                                    
        
                                    
                           </div>
                           <div className="row text-center m-2">
                           <div className='hi rounded shadow p-2 m-2'>
                                    <img src="https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png" alt="" width={'100px'} /> <h5 className=' m-2 p-2'>javascript</h5> 
                                    </div>
                                    <div className='hi rounded shadow p-2 m-2'>
                                    <img src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0" alt="" width={'100px'} /> <h5 className=' m-2 p-2'>react js</h5> 
                                    </div>
                           </div>

                           <div className='row text-center m-2'>
                           
                                    
                                <div  className='hi rounded shadow p-2 m-2'>
                                <img src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2020/11/mongodb.png" alt="" width={'100px'} /> <h5 className=' m-2 p-2'>mongodb</h5> 
                                </div>
    
                                
    
                                <div className='hi rounded shadow p-2 m-2'>
                                <img src="https://icon-library.com/images/node-js-icon/node-js-icon-6.jpg" alt="" width={'100px'} /> <h5 className=' m-2 p-2'>node js</h5> 
                                </div>
    
                                
                           </div>
                    </div>
                </div> 
                <div className="col-1">
                <Col sm={1}>
       <div className="vl"></div>
 </Col>
                </div>
                

                <div className="col-5 rounded shadow">
                   <div>
                    <motion.h1 initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.30' }} viewport={{ once: true }} className='text-center p-3 m-2'>Education</motion.h1>
                   </div>
                    <div className="p-3">
                        <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.50' }} viewport={{ once: true }} className='hii p-2 m-2'>
                            <h3>MEA(R)N STACK</h3>
                            <h6 style={{color:'grey'}}>present</h6>
                            <h5 style={{color:'gray'}}>Luminar Technolab,Kochi</h5> 
                        </motion.div>

                        <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.60' }} viewport={{ once: true }} className='hii p-2 m-2'>
                            <h3>BSc Computer Science</h3>
                            <h6 style={{color:'grey'}}>2020-2023</h6>
                            <h5 style={{color:'gray'}}>Thunchath Ezhuthachan College,palakkad</h5> 
                        </motion.div>

                        <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.70' }} viewport={{ once: true }} className='hii p-2 m-2'>
                            <h3>Plus Two</h3>
                            <h6 style={{color:'grey'}}>2020</h6>
                            <h5 style={{color:'gray'}}>KKMHSS ,Vandithavalam</h5> 
                        </motion.div>

                       <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.80' }} viewport={{ once: true }} className='hii p-2 m-2'>
                            <h3>SSLC</h3>
                            <h6 style={{color:'grey'}}>2018</h6>
                            <h5 style={{color:'gray'}}>Sree Narayana Public School,Kollengode</h5>
                       </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Box>

  )
}

export default Skills