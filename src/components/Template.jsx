import React from 'react';
import Plate from './plate.jpg';
import './Template.css'

function Template(){
  return(
    <div className='plateDiv'>
    <img className='plateImage' src={Plate}></img>
    <div className='plateText'>
    <p>Meet the new <b>temp</b> for our office <b>plate</b>, Karen!</p>
    <h3> Thanks Karen!!! Great Lunch!!</h3>
    </div>
    </div>
  );
}

export default Template;
