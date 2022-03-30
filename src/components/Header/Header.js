import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin,AiFillMail,AiOutlineDownload } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import Tooltip from "@material-ui/core/Tooltip";
import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex",alignItems:"center",color:"white",marginBottom:"20px"}}>
           <DiCssdeck size="3rem"/><Span>PortFolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ashwani2">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ashwani-kumar-764106146/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="mailto:ashwani.kumar1406@gmail.com">
        <AiFillMail size="3rem" />
      </SocialIcons>
      <Tooltip title="Download CV" style={{size:"2rem"}}>
      <SocialIcons href='files\Ashwani_resume_FS.pdf' download>
        <AiOutlineDownload size="3rem"/>
      </SocialIcons>
      </Tooltip>
    </Div3>
  </Container>
);

export default Header;
