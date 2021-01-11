// content script

import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const StyledFrame = styled.iframe`
  width: 400px;
  height: 300px;
  border: 0;
  border-radius: 50px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.35) !important;
`;

const url = chrome.runtime.getURL('/app.html');

const FrameEle = () => {
  return <StyledFrame title="widget-frame" src={url} scrolling="no" />;
};

const container = document.createElement('div');
container.setAttribute('class', 'widget-wrapper');
document.body.appendChild(container);

ReactDOM.render(<FrameEle />, container);
