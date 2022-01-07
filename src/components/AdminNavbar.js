import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ROUTES } from "../constants/routes";
import { useAuth, USER_STATES } from "../context/AuthContext";
import styles from "../styles/navbar.module.css";

export const AdminNavbar = () => {
  const { currentUser, isLoggedIn, logout } = useAuth();

  const router = useRouter();
  
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          onClick={() => router.push(ROUTES.HOME)}
          style={{ cursor: "pointer" }}
        >
          <Image
            src="http://www.ifgfsf.com/wp-content/uploads/2016/10/IFGF_logo.png"
            className={styles.image}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={`me-auto ${styles.nav}`}
            variant="tabs"
            activeKey={router.pathname}
          >
            <Nav.Item>
              <Nav.Link
                eventKey={ROUTES.USERS}
                onClick={() => router.push(ROUTES.USERS)}
                disabled={router.pathname === ROUTES.USERS}
              >
                Usuarios
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey={ROUTES.ADMIN_NEWS}
                onClick={() => router.push(ROUTES.ADMIN_NEWS)}
                disabled={router.pathname === ROUTES.ADMIN_NEWS}
              >
                Noticias
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link
                eventKey={ROUTES.ADMIN_MESSAGES}
                onClick={() => router.push(ROUTES.ADMIN_MESSAGES)}
                disabled={router.pathname === ROUTES.ADMIN_MESSAGES}
            >
              Mensajes Biblicos
            </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                  eventKey={ROUTES.ADMIN_ALBUMS}
                  onClick={() => router.push(ROUTES.ADMIN_ALBUMS)}
                  disabled={router.pathname === ROUTES.ADMIN_ALBUMS}
              >
                Albums
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey={ROUTES.ADMIN_EVENTS}
                onClick={() => router.push(ROUTES.ADMIN_EVENTS)}
                disabled={router.pathname === ROUTES.ADMIN_EVENTS}
              >
                Eventos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey={ROUTES.ADMIN_DONATIONS}
                onClick={() => router.push(ROUTES.ADMIN_DONATIONS)}
                disabled={router.pathname === ROUTES.ADMIN_DONATIONS}
              >
                Donaciones
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey={ROUTES.ADMIN_VIDEOS}
                onClick={() => router.push(ROUTES.ADMIN_VIDEOS)}
                disabled={router.pathname === ROUTES.ADMIN_VIDEOS}
              >
                Videos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey={ROUTES.ADMIN_GAMES}
                onClick={() => router.push(ROUTES.ADMIN_GAMES)}
                disabled={router.pathname === ROUTES.ADMIN_GAMES}
              >
                Juegos
              </Nav.Link>
            </Nav.Item>
            <Nav>
              {isLoggedIn ? (
                <NavDropdown title={currentUser.name} id="nav-dropdown">
                  <NavDropdown.Item onClick={() => logout()}>
                    LOGOUT
                  </NavDropdown.Item>
                </NavDropdown>
              ) : currentUser === USER_STATES.NOT_KNOWN ? (
                "cargando..."
              ) : (
                <Link href={ROUTES.LOGIN}>Iniciar Sesión</Link>
              )}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};