import React from 'react';
import './App.css';
import BlurText from './BlurText';
import CurvedLoop from './CurvedLoop';
import Aurora from './Aurora';
import GridMotion from './GridMotion';
import CardNav from './CardNav';
import logo from './logo.svg';
import ProfileCard from './ProfileCard'

function App() {
  const projectImages = [
    // '/Project%20SS/1.png',
    // '/Project%20SS/2.png',
    // '/Project%20SS/3.png',
    '/Project%20SS/4.jpg',
    '/Project%20SS/5.jpg',
    '/Project%20SS/6.jpg',
    '/Project%20SS/7.jpg',
    '/Project%20SS/8.jpg',
    '/Project%20SS/9.jpg',
    '/Project%20SS/10.jpg',
    '/Project%20SS/11.jpg',
    '/Project%20SS/12.jpg',
    '/Project%20SS/13.jpg',
    '/Project%20SS/14.jpg',
    '/Project%20SS/15.jpg',
  ];
  return (
    <div className="App">
      <CardNav
        logo={logo}
        items={[
          {
            label: "About",
            bgColor: "#ffffff10",
            textColor: "#fff",
            onClick: () => console.log("About clicked")
          },
          {
            label: "Projects",
            bgColor: "#ffffff10",
            textColor: "#fff",
            onClick: () => console.log("Projects clicked")
          },
          {
            label: "Contact",
            bgColor: "#ffffff10",
            textColor: "#fff",
            onClick: () => console.log("Contact clicked")
          }
        ]}
        baseColor="#00000000"
        menuColor="#fff"
        buttonBgColor="#ffffff10"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      <section className="hero-section">
        <Aurora colorStops={["#5227FF", "#7CFF67", "#5227FF"]} blend={0.5} amplitude={1.0} speed={0.5} />
        <div className="hero-content">
          <BlurText text="Developing" animateBy="words" className="hero-h1" />
          <BlurText text="For Every Device," animateBy="words" className="hero-h1" />
          <BlurText text="Everywhere" animateBy="words" className="hero-h1" />
          <BlurText text="Syed Hadeed Khalid" animateBy="words" className="hero-h2" />
          <a href="#" className="download-resume-btn">Download Resume</a>
        </div>
        <CurvedLoop marqueeText="React native ✦ Flutter ✦ React.js ✦ HTML ✦ CSS ✦ JavaScript ✦ Python ✦" curveAmount={0} className="curved-loop-small" />
      </section>
      <section className="App-section" id="about">
        <GridMotion items={projectImages} />
      </section>
      <section className="App-section" id="projects">
        <h3>Projects</h3>
        <ul>
          <li>Project 1 - Short description</li>
          <li>Project 2 - Short description</li>
          <li>Project 3 - Short description</li>
        </ul>
      </section>
      <section className="App-section" id="contact">
        <ProfileCard
          name="Hadeed"
          title="App Developer"
          handle="syedhadeedkhalid"
          status="Online"
          contactText="Contact Me"
          iconUrl="/iconurl.png"
          avatarUrl="/avatar.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
        />
      </section>
    </div>
  );
}

export default App;

