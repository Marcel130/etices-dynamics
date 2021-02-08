import { Dropdown , Navbar , NavDropdown , Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import Link from 'next/link'
import {FaFacebookF , FaInstagram , FaWhatsapp , FaLinkedin} from 'react-icons/fa'
import style from './../public/css/Layouts/Navbar.module.css'

export default function NavHeader() {
    
    return(
        <div>
            <Navbar bg="light" expand="lg" className={style.navbar}>
                <Navbar.Brand href="#home" className={style.logo_site}>
                    <Image src="/images/logo-etices-dynamics.png" width={100} height={100} alt="Logo de Etices Dynamics" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={style.menu + ""}>
                        <Nav.Link className={style.menu_links} ><Link href="#a-propos"><a > APROPOS </a></Link></Nav.Link>
                        <Nav.Link className={style.menu_links} ><Link href="#a-propos"><a > APROPOS </a></Link></Nav.Link>
                        <Nav.Link className={style.menu_links} ><Link href="#expertise"><a > EXPERTISE </a></Link></Nav.Link>
                        <Nav.Link className={style.menu_links} ><Link href="#realisations"><a > REALISATIONS </a></Link></Nav.Link>
                        <Nav.Link className={style.menu_links} ><Link href="#notre-team"><a > TEAM </a></Link></Nav.Link>
                        <Nav.Link className={style.menu_links} ><Link href="#contactez-nous"><a > CONTACT </a></Link></Nav.Link>
                    </Nav>
                    <Nav className={style.social_links}>
                        <ul className={style.links}>
                            <li><FaFacebookF/></li>
                            <li><FaInstagram/></li>
                            <li><FaWhatsapp/></li>
                            <li><FaLinkedin/></li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}