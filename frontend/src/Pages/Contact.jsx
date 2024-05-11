import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { blueGrey, deepOrange,} from '@mui/material/colors'
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
function Contact({mode}) {
  return (
    <Box sx={{width: "100%",py:3, bgcolor: mode?blueGrey[900]:blueGrey[1000]}}>

    <div>
        <div className="container p-4">
            <div className="row">
                <div className="col-6">
                    <div style={{backgroundColor:' rgb(20, 20, 20)'}} className="rounded shadow p-5">
                    <motion.h2 initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.30' }} viewport={{ once: true }} style={{color:'white'}}>Contact us</motion.h2>
                        <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.60' }} viewport={{ once: true }} style={{backgroundColor:' rgb(25, 25, 25)'}} className="rounded shadow p-4 m-2">
                           <div style={{justifyContent:'space-between'}} className='p-3 d-flex'>
                           
                               <div><input type="text" class="form-control form-input" name="" placeholder='Name' id="" /></div> 
                               <div><input type="text" class="form-control form-input" name="" placeholder='Email' id="" /></div>
                           </div>
                           <div className='p-3'>
                           <input type="text" class="form-control form-input" name="" placeholder='Subject' id="" />
                           </div>
                           <div className='p-3'>
                           <textarea type="text" class="form-control form-input" name="" placeholder='Comment' id="" />
                           </div>
                            <div className='p-3'><button style={{color:'white',backgroundColor:'red'}} className='btn rounded'>Send</button></div>

                        </motion.div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.40' }} viewport={{ once: true }} style={{color:'white'}} className='text-center'><h1>Let's Work Together!</h1></motion.div>
                    <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.50' }} viewport={{ once: true }} style={{color:'gray'}} className='m-4 p-2'>
                        <motion.h3 initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.60' }} viewport={{ once: true }}>Get in Touch</motion.h3>
                        <motion.p initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.70' }} viewport={{ once: true }} className='p-2'>Always available for freelancing if the right project comes along.Feel free to contact me.</motion.p>
                        <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '.90' }} viewport={{ once: true }} className='p-2 d-flex'>
                            <img className='m-3' src="https://cdn1.iconfinder.com/data/icons/ui-5/502/address-512.png" alt="" width={'40px'} height={'40px'} />
                            <h6>123 street new york city <br />
                                united states of america <br />
                                ny 765345
                            </h6>
                        </motion.div>
                        <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '1.1' }} viewport={{ once: true }} className='p-2 d-flex'>
                            <img className='m-3' src="https://th.bing.com/th/id/R.79801518e6b014a73fdd83e01ac554f4?rik=iVcKtRq6iTNKew&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2011%2f12%2femail-icon-transparent_230759.png&ehk=XOs42W6N3x0MZdbkVjkkyn2ylZJOFzPMrhkLEXUzAkU%3d&risl=&pid=ImgRaw&r=0" width={'40px'} height={'40px'} alt="" />
                            <h6 className='p-2'>Amarjith234@gmail.com <br /> info@domain.com</h6>

                        </motion.div>
                        <motion.div initial={{ y: '100px', opacity: '0' }} whileInView={{ y: '0px', opacity: '1' }} transition={{ duration: '1.1' }} viewport={{ once: true }} className='p-2 d-flex'>
                            <img className='m-3' src="https://images.vexels.com/media/users/3/205046/isolated/preview/0dc6449cd2678d0945b85702ce586cf5-smartphone-blue-icon-by-vexels.png" width={'40px'} height={'40px'} alt="" />
                            <h6 className='p-2'>+91 7356970531 <br /> +91 9048373563</h6>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    </div>
    </Box>

  )
}

export default Contact