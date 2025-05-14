import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/ankitlogo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import useSound from "use-sound";
import space from '../Assets/music/Continuum.mp3';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillSound,
  AiTwotoneAudio,
  AiFillStop,
  AiOutlineContacts,
  AiOutlineAudioMuted,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [play, { stop }] = useSound(space, {
    playbackRate,
    interrupt: true,
    volume: isMuted ? 0 : 1,
  });

   useEffect(() => {
 
     play();
 
 
     return () => {
       stop();
     };
   }, [play, stop]);
 


  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };


  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Link to="/">
          <Navbar.Brand className="d-flex">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About Me
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact-me"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact Me
              </Nav.Link>
            </Nav.Item>

            <span onClick={handleMuteToggle} className="nav-link" title={isMuted ? 'Unmute' : 'Mute'}>
              {isMuted ? <AiOutlineAudioMuted /> : <AiFillSound />}
            </span>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
