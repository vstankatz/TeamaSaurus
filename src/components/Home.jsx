import React from 'react';
import Header from './Header';
import Billboard from './Billboard';
import Body from './Body';
import About from './About';
import OurTeam from './OurTeam';
import Footer from './Footer';

function Home(){
  return(
    <div>
    <Header/>
    <Billboard/>
    <Body/>
    <About/>
    <OurTeam/>
    <Footer/>
    </div>
  );
}

export default Home;
