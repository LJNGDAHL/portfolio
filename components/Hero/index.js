import Contacts from '../Contacts';
import Header from '../Header';
import Statusbar from '../Statusbar';
import Global from '../Global';

export default function Hero() {
  return (
    <div className="Hero">
      <Header />
      <Contacts />
      <div className="u-marginTopXL u-upperCase">
        <h1 className="u-colorWhite u-italic u-fontL">Katarina Ljungdahl</h1>
        <h2 className="u-colorYellow u-bold u-fontXL">Developer</h2>
      </div>
      <Statusbar />
      <Global />
      <style jsx>{`
        .Hero {
          display: flex;
          justify-content: center;
          height: 100vh;
          width: 100vw;
          position: absolute;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}
