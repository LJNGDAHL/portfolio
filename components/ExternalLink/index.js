import Global from '../Global';

const ExternalLink = ({ url, children }) => {
  return (
    <div>
      <a className="ExternalLink" href={ url }>{ children }</a>
      <Global />
      <style jsx>{`
        .ExternalLink {
          border-bottom: 2px solid var(--yellow);
          font-size: 0.9rem;
          font-style: italic;
          margin: 1rem;
          position: absolute;
          right: 0;
          padding: 0.4em;
          text-decoration: none;
          top: 0;
        }

        {/* Yellow background that animates from right to left */}
        .ExternalLink::after {
          background: var(--yellow);
          bottom: 0;
          content: "";
          height: 0;
          opacity: 1;
          position: absolute;
          right: 0;
          transition: height 250ms var(--slide);
          width: 100%;
          z-index: -1;
        }

        .ExternalLink:hover::after {
          height: 100%;
        }

        /**
          * Media Queries
          */
        @media screen and (min-width: 900px) {
          .ExternalLink {
            font-size: 1.2rem;
            margin: 2rem 1.7rem;
          }
        }
      `}
      </style>
    </div>
  );
};

export default ExternalLink;
