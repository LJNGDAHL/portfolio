import Link from 'next/link';
import Global from '../Global';

const Footer = () => {
  return (
    <div className="Footer">
      <h2 className="u-upperCase u-fontM u-colorWhite">Katarina Ljungdahl <span className="u-italic u-fontXS">Developer</span></h2>
      <div className="u-marginTopS">
        <Link>
          <a href="https://github.com/LJNGDAHL/" className="FooterLink" >Github</a>
        </Link>
        <Link>
          <a href="https://www.linkedin.com/in/katarinaljungdahl/" className="FooterLink" >Linkedin</a>
        </Link>
        <Link>
          <a href="https://twitter.com/LJNGDAHL/" className="FooterLink" >Twitter</a>
        </Link>
      </div>
      <Global />
      <style jsx>{`
        .Footer {
          align-items: center;
          background-color: var(--black);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 40vh;
          text-align: center;
          width: 100%;
        }

        .FooterLink {
          border-bottom: 1px solid var(--white);
          color: var(--white);
          margin: 0.4em;
          padding: 0.2em;
          position: relative;
          text-decoration: none;
          transition: color 250ms ease-in-out, border 250ms ease-in-out;
          z-index: 1;
        }

        .FooterLink:hover {
          border-bottom: 1px solid var(--yellow);
          color: var(--black);
        }

        .FooterLink::after {
          background: var(--yellow);
          bottom: 0;
          content: "";
          height: 0;
          left: 0;
          position: absolute;
          transition: height 250ms ease;
          width: 100%;
          z-index: -1;
        }

        .FooterLink:hover::after {
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Footer;
