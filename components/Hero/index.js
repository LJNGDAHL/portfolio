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
        <h1 className="Name">Katarina Ljungdahl</h1>
        <h2 className="Profession">Developer</h2>
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
          margin: 30vh auto;
          text-transform: uppercase;
        }

        .Name {
          animation: hero 1000ms 900ms forwards var(--slide);
          color: var(--white);
          text-style: italic;
          font-size: 1.2rem;
          opacity: 0;
        }

        .Profession {
          animation: hero 1000ms 1000ms forwards var(--slide);
          color: var(--yellow);
          font-size: 2.5rem;
          font-weight: bold;
          opacity: 0;
        }

        .HeroImage {
          animation: hero 1000ms 500ms forwards var(--slide);
          left: 5vw;
          opacity: 0;
          position: absolute;
          top: 15vh;
          width: 90vw;
          z-index: -1;
        }

        @keyframes hero {
          0% {
            opacity: 0;
            transform: translateY(50%);
          }
          100% {
            opacity: 1;
            transform: none
          }
        }

        /**
        * Media Queries
        */
        @media screen and (min-width: 600px) {
          .Title {
            margin: 40vh auto;
          }

          .Name {
            font-size: 2.5rem;
          }

          .Profession {
            font-size: 5rem;
          }
        }

        @media screen and (min-width: 900px) {
          .Profession {
            font-size: 7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
