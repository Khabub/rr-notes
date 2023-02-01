import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';



const NavMobile: React.FC = () => {



  return (
    <Container>
      <p className='logo'>rr-notes</p>
      <MenuIcon sx={{marginRight: "1rem"}} />
    </Container>
  );
};

export default NavMobile;

const Container = styled.div`
  position: fixed;
  background-color: #9ef4ff;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;  

  .logo {
    padding-left: 1rem;
  }


`;