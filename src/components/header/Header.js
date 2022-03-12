import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../common/Logo/Logo';
import styles from './Header.module.css';

const Header = () => {

  return (
    <Navbar bg="dark" className={styles.header} expand="lg">
        <Container>
            <Navbar.Brand>
                <Link to="/"><Logo /></Link>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className={styles.menu}>
                    <NavLink to="/">Buy</NavLink>
                    <NavLink to="/">Sell</NavLink>
                    <NavLink to="/">Rent</NavLink>
                    <NavLink to="/">Propreneur</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default Header;