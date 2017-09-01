import Global from '../Global';

/**
 * Displayed on pages (single and index) when error occurs.
 */
const ErrorMessage = () => {
  return (
    <div className="ErrorMessage">
      <h1 className="u-upperCase u-fontL">Ooops, something went wrong.</h1>
      <p className="u-italic u-fontS">Please try again later.</p>
      <Global />
      <style jsx>{`
        .ErrorMessage {
          background-color: var(--black);
          color: var(--white);
          margin: 0 auto 4rem;
          padding: 4rem 2rem;
          text-align: center;
          width: 90vw;
        }
      `}</style>
    </div>
  );
};

export default ErrorMessage;
