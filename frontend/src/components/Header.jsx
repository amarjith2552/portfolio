import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBIcon,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import ModeSwitch from './DarkModeSwitch';
import { TypeAnimation } from 'react-type-animation';
import { blueGrey, deepOrange,} from '@mui/material/colors'
import { Box } from '@mui/material';

function Header({mode,setMode}) {
    const [openNav, setOpenNav] = useState(false);
  return (
    <Box sx={{width: "100%", bgcolor: mode?blueGrey[900]:blueGrey[1000]}}>

    <div>
 <MDBNavbar expand='lg' light >
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
            <img src="https://trydo.rainbowit.net/assets/images/logo/logo-symbol-dark.png" alt="" width={'100%'} />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav} >
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink style={{color:'white'}} active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem>
              
                <MDBNavbarLink style={{color:'white'}} active aria-current='page'  href='#'>
                  About
                </MDBNavbarLink>
              
            </MDBNavbarItem>

             <MDBNavbarItem>
              <MDBNavbarLink style={{color:'white'}} active aria-current='page' href='#'>
                Education
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink style={{color:'white'}} active aria-current='page' href='#'>
                Skills
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink style={{color:'white'}} active aria-current='page' href='#'>
                Project
              </MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>

    <div className='m-2 p-1'>
    <ModeSwitch setMode={setMode} mode={mode} />
    </div>

    </MDBNavbar>
    </div>
    </Box>

  )
}

export default Header