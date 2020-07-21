import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 0px;
  margin-top: 10px;
`;

const GitHubGraph = () => (
  <StyledContainer>
    <a href="https://github.com/Rohithgilla12">
      <img src="http://ghchart.rshah.org/Rohithgilla12" alt="Github chart" />
    </a>
  </StyledContainer>
);

export default GitHubGraph;
