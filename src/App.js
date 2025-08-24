import React, { useMemo } from 'react';
import './App.css';
import BlurText from './BlurText';
import CurvedLoop from './CurvedLoop';
import Aurora from './Aurora';
import GridMotion from './GridMotion';
import CardNav from './CardNav';
import logo from './logo.svg';
import ProfileCard from './ProfileCard';
import ContactForm from './ContactForm';
import ProjectsGrid from './ProjectsGrid';

function App() {



  // Memoize project data to prevent unnecessary re-renders
  const projectImages = useMemo(() => [
    '/Project SS/4.jpg',
    '/Project SS/5.jpg',
    '/Project SS/6.jpg',
    '/Project SS/7.jpg',
    '/Project SS/8.jpg',
    '/Project SS/9.jpg',
    '/Project SS/10.jpg',
    '/Project SS/11.jpg',
    '/Project SS/12.jpg',
    '/Project SS/13.jpg',
    '/Project SS/14.jpg',
    '/Project SS/15.jpg',
  ], []);

  const projectData = useMemo(() => [
    {
      title: "The Grub Truck",
      images: [
        { id: 1, img: "/Project SS/Grub/12.jpg" },
        { id: 2, img: "/Project SS/Grub/11.jpg" },
        { id: 3, img: "/Project SS/Grub/10.jpg" },
        { id: 4, img: "/Project SS/Grub/9.jpg" },
        { id: 5, img: "/Project SS/Grub/8.jpg" },
        { id: 6, img: "/Project SS/Grub/7.jpg" },
        { id: 7, img: "/Project SS/Grub/6.jpg" },
        { id: 8, img: "/Project SS/Grub/5.jpg" },
        { id: 9, img: "/Project SS/Grub/4.jpg" },
        { id: 10, img: "/Project SS/Grub/3.jpg" },
        { id: 11, img: "/Project SS/Grub/2.jpg" },
        { id: 12, img: "/Project SS/Grub/1.jpg" },
      ]
    },
    {
      title: "fAIk App",
      images: [
        { id: 1, img: "/Project SS/faik/6.jpg" },
        { id: 2, img: "/Project SS/faik/5.jpg" },
        { id: 3, img: "/Project SS/faik/4.jpg" },
        { id: 4, img: "/Project SS/faik/3.jpg" },
        { id: 5, img: "/Project SS/faik/2.jpg" },
        { id: 6, img: "/Project SS/faik/1.jpg" },
      ]
    },
    {
      title: "A.R.C.H Logistics",
      images: [
        { id: 1, img: "/Project SS/Arch/5.jpg" },
        { id: 2, img: "/Project SS/Arch/4.jpg" },
        { id: 3, img: "/Project SS/Arch/3.jpg" },
        { id: 4, img: "/Project SS/Arch/2.jpg" },
        { id: 5, img: "/Project SS/Arch/1.jpg" },
      ]
    },
  ], []);
  return (
    <div className="App">
      {/* Light Rays Effect - Last Page Only with Scroll Fade */}
      {/* <div
        id="light-rays-container"
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          bottom: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: 'transparent',
          opacity: lightRaysOpacity,
          transition: 'opacity 0.3s ease',
          willChange: 'opacity'
        }}
      >
        <LightRays
          raysOrigin="bottom-center"
          raysSpeed={0.3}
          lightSpread={1.5}
          rayLength={2.5}
          followMouse={false}
          fadeDistance={1}
          saturation={0.8}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          className="custom-rays"
        />
      </div> */}

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
        <Aurora colorStops={["#5227FF", "#7CFF67", "#5227FF"]} blend={0.3} amplitude={0.8} speed={0.3} />
        <div className="hero-content">
          <BlurText text="Developing" animateBy="words" className="hero-h1" />
          <BlurText text="For Every Device," animateBy="words" className="hero-h1" />
          <BlurText text="Everywhere" animateBy="words" className="hero-h1" />
          <BlurText text="Syed Hadeed Khalid" animateBy="words" className="hero-h2" />
          <button className="download-resume-btn">Download Resume</button>
        </div>
        <CurvedLoop marqueeText="React native ✦ Flutter ✦ React.js ✦ HTML ✦ CSS ✦ JavaScript ✦ Python ✦" curveAmount={0} className="curved-loop-small" />
      </section>
      <section className="App-section" id="about">
        <GridMotion items={projectImages} />
      </section>
      <section className="App-section" id="projects">
        <h3>Projects</h3>
        <ProjectsGrid projects={projectData} />
      </section>
      <section className="App-section" id="contact">
        <h2 className="contact-heading">Contact</h2>
        <div className="contact-section-container">
          <ProfileCard
            name="Hadeed"
            title="App Developer"
            handle="syedhadeedkhalid"
            status="Online"
            contactText="Contact Me"
            iconUrl="/iconurl.png"
            avatarUrl="/avatar.png"
            showUserInfo={true}
            enableTilt={window.innerWidth > 768}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
          />
          <ContactForm
            onSubmit={(formData) => {
              console.log('Form submitted:', formData);
              // Here you can add logic to send the form data
              alert('Thank you for your message! I will get back to you soon.');
            }}
          />
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-line"></div>
          <p className="footer-text">Made with ♡ by 𐋅</p>
        </div>
      </section>
    </div>
  );
}

export default App;

