import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

const Header = ()=>{
  return(
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" style={{fontStyle:'italic',fontWeight:800,color:"Orange"}}> दूरदर्शन world news</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink className={({isActive})=> isActive ? styles.activeLink : styles.NavLink_style } to="/">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={({isActive})=> isActive ? styles.activeLink : styles.NavLink_style } to="/business">Business</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={({isActive})=> isActive ? styles.activeLink : styles.NavLink_style } to="/entertainment">Entertainment</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={({isActive})=> isActive ? styles.activeLink : styles.NavLink_style } to="/general">General</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={({isActive})=> isActive ? styles.activeLink : styles.NavLink_style } to="/health">Health</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={({isActive})=> isActive ? styles.activeLink : styles.NavLink_style } to="/science">Science</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={({isActive})=> isActive ? styles.activeLink : styles.NavLink_style } to="/sports">Sports</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={({isActive})=> isActive ? styles.activeLink : styles.NavLink_style } to="/technology">Technology</NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
export default Header;