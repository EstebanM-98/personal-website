import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Jobs, Featured, Projects, ParticlesBackground } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const AcademyPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <ParticlesBackground />
      {/* <Hero /> Optionally include Hero or a specific Academy Hero */}
      <Jobs filter="academy" />
      <Featured filter="academy" />
      <Projects filter="academy" />
    </StyledMainContainer>
  </Layout>
);

AcademyPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AcademyPage;
