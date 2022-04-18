import React from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import SectionHeader from './components/SectionHeader';
import Socials from './components/Socials';
import { SetTitle } from './Hooks';
import '@mdi/font/css/materialdesignicons.css';

function App() {
  const [ introAnimation, setIntroAnimation ] = React.useState(true);

  SetTitle("Jake Rieger");

  React.useEffect(() => {
    setTimeout(() => {
      setIntroAnimation(false);
    }, 2600);
  }, []);

  return (
    <main>
      {introAnimation ? (
        <div className="logo-animated">
          <Logo animated />
        </div>
      ) : (
        <div>
          <Navbar />

          <section id="main">
            <div>
              <p className="subtitle">Hi, my name is</p>
              <h1>Jake Rieger,</h1>
              <h1 style={{ color: 'var(--TEXT_LABEL)' }}>and I'm a web developer.</h1>
              <br/>
              <p>
                I'm a full-stack web developer and educator with a passion for creating beautiful,
                intuitive, and responsive user experiences. Currently, I'm focused on building mobile
                and web applications at <a className="link" href="https://gymateapp.com">Gymate</a>.
              </p>
              <br/><br/>
              <a className="button" href="mailto:contact.jakerieger@gmail.com">Get in touch</a>
            </div>
          </section>

          <section id="about">
            <div className="section-container">
              <div style={{
                flex: 1,
                marginRight: 20
              }}>
                <SectionHeader number="01" title="About Me" />
                <br/>
                <p>
                  Hi! I'm Jake Rieger, a 23 year-old a full-stack web developer and educator on YouTube.
                  I've been interested in programming since I was 8 years old when I got my first computer,
                  and I've been teaching myself to code ever since. I'm currently working at{' '}
                  <a className="link" href="https://gymateapp.com">Gymate</a> as the principle engineer,
                  and I'm also a teacher for <a className="link" href="https://www.freecodecamp.org/">FreeCodeCamp</a>.
                  <br/><br/>
                  I've hacked Facebook, reverse-engineered dozens of online retailers' API's, 
                  built automation tools for retail releases, and built a web app for my local government.
                  <br/><br/>
                  These are the technologies I've been working with recently:
                  <div id="tech-stack">
                    <div className="tech-stack-item">
                      <div className="tech-stack-item-icon">
                        <i className="mdi mdi-chevron-right" /><i className="mdi mdi-language-typescript" style={{ color: '#2f74c0' }} />TypeScript
                      </div>
                    </div>
                    <div className="tech-stack-item">
                      <div className="tech-stack-item-icon">
                        <i className="mdi mdi-chevron-right" /><i className="mdi mdi-nodejs" style={{ color: '#23b45d' }} />Node.js
                      </div>
                    </div>
                    <div className="tech-stack-item">
                      <div className="tech-stack-item-icon">
                        <i className="mdi mdi-chevron-right" /><i className="mdi mdi-language-go" style={{ color: '#00a3cc' }} />Golang
                      </div>
                    </div>
                    <div className="tech-stack-item">
                      <div className="tech-stack-item-icon">
                        <i className="mdi mdi-chevron-right" /><i className="mdi mdi-react" style={{ color: '#5ed3f3' }} />React
                      </div>
                    </div>
                    <div className="tech-stack-item">
                      <div className="tech-stack-item-icon">
                        <i className="mdi mdi-chevron-right" /><i className="mdi mdi-vuejs" style={{ color: '#3eaf7c' }} />Vue.js
                      </div>
                    </div>
                    <div className="tech-stack-item">
                      <div className="tech-stack-item-icon">
                        <i className="mdi mdi-chevron-right" /><i className="mdi mdi-electron-framework" style={{ color: '#97deec' }} />Electron
                      </div>
                    </div>
                  </div>
                </p>
              </div>
              <div id="avatar-container">
                <svg width="220" height="220">
                  <rect
                    x="0"
                    y="0"
                    width="220"
                    height="220"
                    fill="none"
                    stroke="var(--PRIMARY)"
                    strokeWidth="4"
                    rx="8"
                  />
                </svg>
                <img src="https://avatars.githubusercontent.com/u/19679090?v=4" alt="me" width="218" height="218" className="avatar" />
              </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </section>

          <Socials/>
        </div>
      )}
    </main>
  );
}

export default App;
