import Global from '../Global';

const Contacts = () => {
  return (
    <div className="Contacts">
      <h2 className="ContactsHeadline">Get In Touch</h2>
      <div><a className="ContactsLink" href="mailto:hello@katarinaljungdahl.se?subject=Hello Developer!">hello@katarinaljungdahl.se</a>
      </div>
      <a className="ContactsLink" href="tel:+46738427919">+46 (0) 73 842 79 19</a>
      <Global />
      <style jsx>{`
        .Contacts {
          background-color: var(--white);
          position: absolute;
          top: 0;
          right: 0;
          padding: 1.5rem 2rem 0;
          text-align: right;
          line-height: 1.2;
          font-size: 0.9rem;
          height: 70vh;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
          z-index: -1;
        }

        .ContactsHeadline {
          font-weight: 700;
          font-size: inherit;
          text-transform: uppercase;
        }

        .ContactsLink {
          display: block;
          margin-left: 10rem;
          text-decoration: none;
          padding: 0.1rem 0.5rem;
          transform: translateX(0.5rem);
          {/* z-index: 1; */}
        }

        {/* Yellow background that animates from right to left */}
        .ContactsLink::after {
          background: var(--yellow);
          bottom: 0;
          content: "";
          height: 100%;
          opacity: 1;
          position: absolute;
          right: 0;
          transition: width 250ms ease;
          width: 0;
          z-index: -1;
        }

        .ContactsLink:hover::after {
          width: 100%;
        }

        @keyframes siteMenu {
          from {
            opacity: 0;
            transform: translate3d(-100%, 0, 0)
          }
          to {
            opacity: 1;
            transform: none
          }
        }
      `}</style>
    </div>
  );
};

export default Contacts;
