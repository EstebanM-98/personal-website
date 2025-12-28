import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Jobs, Featured, Projects, ParticlesBackground } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndustryPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <ParticlesBackground />
      {/* <Hero /> Optionally include Hero or a specific Industry Hero */}
      <Jobs filter="industry" />
      <Featured filter="industry" />
      <Projects filter="industry" />
    </StyledMainContainer>
  </Layout>
);

IndustryPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndustryPage;
