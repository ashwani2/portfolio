import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+91-8512057797">+91-8512057797</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:ashwani.kumar1406@gmail.com">ashwani.kumar1406@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Developing 1 project at a time</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/ashwani2">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ashwani-kumar-764106146/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="www.instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
