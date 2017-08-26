import Video from '../Video';
import Header from '../Header';
import Statusbar from '../Statusbar';

export default function Hero() {
  return (
    <div>
      <Header />
      <div className="Hero">
        <div>
          <div className="Contacts">
            <h2 className="Contacts__headline">Get In Touch</h2>
            <div><a className="Contacts__link" href="mailto:hello@katarinaljungdahl.se?subject=Hello Developer!">hello@katarinaljungdahl.se</a>
            </div>
            <a className="Contacts__link" href="tel:+46738427919">+46 (0) 73 842 79 19</a>
          </div>
          <h1 className="Headline-name">Katarina Ljungdahl</h1>
          <h2 className="Headline-title">Developer</h2>
          <Statusbar />
        </div>
        <Video />
      </div>
      <style jsx>{`
        .Hero {
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 100vh;
          width: 100vw;
          justify-content: center;
        }

        .Contacts {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          color: var(--white);
          text-align: right;
          line-height: 1.2;
          font-size: 0.9rem;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        .Contacts__headline {
          color: var(--carmine);
          font-weight: 700;
          font-size: inherit;
        }

        .Contacts__link {
          display: block;
          text-decoration: none;
          position: relative;
          padding: 0.1rem 0.5rem;
          transform: translateX(0.5rem);
          z-index: 1;
        }

        .Contacts__link::after {
          background: var(--white);
          content: "";
          height: 100%;
          width: 0;
          bottom: 0;
          right: 0;
          opacity: 1;
          position: absolute;
          transition: width 250ms ease;
          z-index: -1;
        }

        .Contacts__link:hover {
          color: var(--carmine);
          transition: color 150ms ease;
        }

        .Contacts__link:hover::after {
          width: 100%;
        }

        .Headline-name {
          color: var(--white);
          font-family: 'Montserrat', Helvetica, sans-serif;
          font-weight: 300;
          text-transform: uppercase;
          font-weight: 400;
          -webkit-font-smoothing: antialiased;
        }

        .Headline-title {
          font-family: 'Lazer84', 'Montserrat', Helvetica, sans-serif;
          color: var(--carmine);
          font-size: 8rem;
          margin: 0;
        }

      `}</style>
    </div>
  );
}
