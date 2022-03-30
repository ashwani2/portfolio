import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main centre>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        In this Website you can view my work on the listed technologies which I have learnt
        over the years from different learning ways be it my college ,youtube,udemy etc.
      </SectionText>
      <Button onClick={()=>{window.location.assign(`files/Ashwani_resume_FS.pdf`)}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;