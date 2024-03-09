import CountUp from 'react-countup';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>
        {/* LEFT */}
        <div className='flexColStart hero-left'>
          <div className='hero-title'>
            <div className='orange-circle' />
            <h2>
              The Apex <br /> of Quality <br /> and Service
            </h2>
          </div>

          <div className='flexColStart hero-des'>
            The one stop solution for all your roof related services <br />
            We offer a variety of roofing amenities and solutions
            <div className='typewriter'>
              Our services include
              <h3>
                &nbsp; roof{' '}
                <Typewriter
                  words={[
                    'repairs',
                    'inspection',
                    'cleaning',
                    'coating',
                    'tiling',
                    'building',
                  ]}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  cursorBlinking={true}
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={2500}
                />
              </h3>
            </div>
          </div>

          <div className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={2} end={10} duration={3} /> <span>+</span>
              </span>
              <span className='secondaryText'>Projects</span>
            </div>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={50} end={100} duration={4} /> <span>+</span>
              </span>
              <span className='secondaryText'>Happy customers</span>
            </div>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={500} end={1000} duration={4} /> <span>+</span>
              </span>
              <span className='secondaryText'>Hours of service</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className='flexCenter hero-right'>
          <div className='image-container'>
            <img src='./hero-image.png' alt='houses' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
