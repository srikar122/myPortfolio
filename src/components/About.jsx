import { text } from 'framer-motion/client';
import Globe from 'react-globe.gl';
import Button from './myComponents/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import grid1 from '../assets/grid1.png';
import grid2 from '../assets/grid2.png';
import grid3 from '../assets/grid3.png';
import grid4 from '../assets/grid4.png';
import tick from '../assets/tick.svg';
import copy from '../assets/copy.svg';

const About = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    console.log('clicked');
    navigator.clipboard.writeText('srikarmara20@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const handleScroll = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="sm:px-10 px-6 max-sm:mb-40 mb-52" id="about">
              <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-6">About me</h2>

      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Hi, I'm Srikar Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src={grid1} alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div className=''>
              <p className="grid-headtext">Hi, I'm Srikar</p>
              <p className="grid-subtext">
                I graduated from <strong>VNR VJIET</strong> in Information Technology. With a passion for programming, I honed my skills in <strong>frontend</strong> and <strong>backend development</strong>, creating stunning websites and projects using diverse technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="text-center">
              <img src={grid2} alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain sm:mx-auto" />
            </div>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <ul className="grid-subtext list-disc ml-4">
                <li><strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong></li>
                <li><strong>React</strong>, <strong>Node.js</strong>, and <strong>Next.js</strong></li>
                <li><strong>Framer Motion</strong> and <strong>Three.js</strong></li>
                <li><strong>SQL</strong> and proficient in <strong>DBMS</strong></li>
                <li>Strong in <strong>C++</strong> and <strong>Java</strong></li>
                <li><strong>DSA</strong> and <strong>problem-solving</strong> skills</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Work Remotely Section */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                showAtmosphere
                atmosphereColor="rgba(135,206,250,0.5)" // Optional for better visibility
                labelsData={[
                  {
                    lat: 17.3850, // Accurate latitude
                    lon: 78.4867, // Accurate longitude
                    text: "I'm here",
                    size: 0.5, // Adjusted for appropriate scaling
                    color: 'white',
                    offset: [0, 0.1], // Optional for slight offset
                  },
                ]}
                labelAltitude={0.01} // Adjusts the altitude of the label
                labelDotRadius={0.3} // Size of the marker dot
                labelText="I'm here" // Explicit label text
              />


            </div>
            <div>
              <p className="grid-headtext">I work remotely across most timezones.</p>
              <p className="grid-subtext">
                I am available for <strong>freelance projects</strong> to showcase and enhance my skills as a <strong>web developer</strong> and <strong>software developer</strong>. Let's collaborate to build impactful solutions.
              </p>
              <div className="mt-10" onClick={handleScroll}>
                <Button name="contact me" isBeam></Button>
              </div>
            </div>
          </div>
        </div>

        {/* Passion for Coding Section */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src={grid3} alt="grid4" className="w-full sm:h-[266px] object-contain h-fit" />
            <p className="grid-headtext">My Passion for Coding</p>
            <p className="grid-subtext">
              I love solving <strong>problems</strong> and building <strong>innovative solutions</strong> through code. My passion lies in the <strong>software development</strong> field, where I enjoy tackling challenges and bringing ideas to life.
            </p>
          </div>
        </div>

        {/* Contact Me Section */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src={grid4} alt="grid5" className="w-full md:h-[226px] sm:h-[276px] object-cover h-fit sm:object-top" />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleClick}>
                <img src={`${copied ? tick : copy}`} alt="copy-img" className="w-6 h-6" />
                <p className="grid-subtext text-xl">srikarmara20@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
