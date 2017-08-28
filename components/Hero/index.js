import Contacts from '../Contacts';
import Header from '../Header';
import Statusbar from '../Statusbar';
import Global from '../Global';

export default function Hero() {
  return (
    <div className="Hero">
      <Header />
      <Contacts />
      <div className="Title">
        <h1 className="u-colorWhite u-italic u-fontL">Katarina Ljungdahl</h1>
        <h2 className="u-colorYellow u-bold u-fontXL">Developer</h2>
      </div>
      <img className="CoverImage" src="../../static/media/cover.jpg" />
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

        .CoverImage {
          animation-name: coverImage;
          animation-duration: 1000ms;
          animation-fill-mode: forwards;
          animation-delay: 500ms;
          left: 5vw;
          top: 15vh;
          width: 90vw;
          opacity: 0;
          position: absolute;
          z-index: -1;
        }

        @keyframes coverImage {
          from {
            opacity: 0;
            transform: translateY(50%);
          }
          to {
            opacity: 1;
            transform: none
          }
        }
      `}</style>
    </div>
  );
}
