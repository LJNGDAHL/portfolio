import Global from '../Global';

/**
 * Displayed in top right on all pages
 * (index and single)
 */
const Contacts = () => {
  return (
    <div className="Contacts">
      <h2 className="ContactsHeadline">Get In Touch</h2>
      <div><a className="ContactsLink ContactsMail" href="mailto:katarina@folkungagatan54.se?subject=Hello Developer!">katarina@folkungagatan54.se</a>
      </div>
      <a className="ContactsLink ContactsPhone" href="tel:+46738427919">+46 (0) 73 842 79 19</a>
      <Global />
      <style jsx>{`
        .Contacts {
          background-color: var(--white);
          font-size: 0.9rem;
          height: 70vh;
          line-height: 1.2;
          padding: 1rem;
          position: absolute;
          right: 0;
          text-align: right;
          top: 0;
          z-index: -1;
        }

        .ContactsHeadline {
          animation: contacts 800ms var(--slide);
          font-weight: 700;
          font-size: inherit;
          text-transform: uppercase;
          padding: 0.1rem 0.5rem;
        }

        .ContactsLink {
          display: block;
          margin-left: 10rem;
          text-decoration: none;
          padding: 0.1rem 0.5rem;
        }

        .ContactsMail {
          animation: contacts 800ms 200ms var(--slide);
          transform: translateX(0);
        }

        .ContactsPhone {
          animation: contacts 800ms 400ms var(--slide);
          transform: translateX(0);
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

        @keyframes contacts {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }

        }

        /**
        * Media Queries
        */
        @media screen and (min-width: 600px) {
          .Contacts {
            padding: 1.5rem 2rem 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Contacts;
