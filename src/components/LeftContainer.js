import React from 'react';
import Particles from 'react-particles-js';

import '../styles/styles.css';

const LeftContainer = () => (
  <div id="left-side">
    <div id="particles-js">
      <Particles 
        canvasClassName="particles-js"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 850
              }
            }
          }
        }}
      />
    </div>
  </div>
);

export default LeftContainer;