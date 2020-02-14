import React from 'react';
import Team from './team.jpg'

var teamHeader= {
  position: 'relative',
  top: '-50px',
  width: '100vw',
  height: 'auto',
  zIndex: '-1'

}

function Billboard(){
  return(
    <div>
    <img style={teamHeader} src={Team}></img>
    </div>
  );
}

export default Billboard;
