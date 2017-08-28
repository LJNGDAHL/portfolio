import Global from '../Global';

const Contacts = () => {
  return (
    <div className="Contacts">
      <h2 className="ContactsHeadline">Get In Touch</h2>
      <div><a className="ContactsLink ContactsMail" href="mailto:hello@katarinaljungdahl.se?subject=Hello Developer!">hello@katarinaljungdahl.se</a>
      </div>
      <a className="ContactsLink ContactsPhone" href="tel:+46738427919">+46 (0) 73 842 79 19</a>
      <Global />
      <style jsx>{`
        .Contacts {
          background-color: var(--white);
          position: absolute;
          height: 70vh;
          line-height: 1.2;
          top: 0;
          right: 0;
          padding: 1.5rem 2rem 0;
          text-align: right;
          font-size: 0.9rem;
          z-index: -1;
        }

        {/* Used on all elements in Contacts component to make them slide in */}
        @keyframes contactsSlide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .ContactsHeadline {
          animation-name: contactsSlide;
          animation-duration: 800ms;
          font-weight: 700;
          font-size: inherit;
          text-transform: uppercase;
          padding: 0.1rem 0.5rem;
        }

        .ContactsMail {
          animation-name: contactsSlide;
          animation-duration: 800ms;
          animation-delay: 200ms;
          transform: translateX(0);
        }

        .ContactsPhone {
          animation-name: contactsSlide;
          animation-duration: 800ms;
          animation-delay: 400ms;
          transform: translateX(0);
        }


        .ContactsLink {
          display: block;
          margin-left: 10rem;
          text-decoration: none;
          padding: 0.1rem 0.5rem;
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
      `}</style>
    </div>
  );
};

export default Contacts;
