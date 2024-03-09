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

          <div className='flexColStart'>
            We offer a variety of roof related services <br /> Forget all
            difficulties in finding a residence for you
          </div>

          <div className='flexStart typewriter'>
            We provide
            <h3>
              &nbsp; roof{' '}
              <Typewriter
                words={[
                  'repairs',
                  'inspections',
                  'cleaning',
                  'coating',
                  'tiling',
                  'installing',
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
