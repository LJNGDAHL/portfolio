import Contacts from '../Contacts';
import Header from '../Header';
import Statusbar from '../Statusbar';
import Global from '../Global';

/**
 * Content of initial first view
 * (above the fold)
 */
const Hero = () => {
  return (
    <div className="Hero">
      <Header />
      <Contacts />
      <div className="Title">
        <h1 className="u-colorWhite u-italic u-fontL">Katarina Ljungdahl</h1>
        <h2 className="u-colorYellow u-bold u-fontXL">Developer</h2>
      </div>
      <img className="HeroImage" src="../../static/media/cover.jpg" />
      <Statusbar />
      <Global />
      <style jsx>{`
        .Hero {
          display: flex;
          height: 100vh;
          width: 100vw;
          position: absolute;
          z-index: 1;
        }

        .Title {
          margin: 40vh auto;
          text-transform: uppercase;
        }

        .HeroImage {
          animation: HeroImage 1000ms 500ms forwards var(--slide);
          left: 5vw;
          opacity: 0;
          position: absolute;
          top: 15vh;
          width: 90vw;
          z-index: -1;
        }

        @keyframes HeroImage {
          0% {
            opacity: 0;
            transform: translateY(50%);
          }
          100% {
            opacity: 1;
            transform: none
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
