import Global from '../Global';

/**
 * @param {string} url
 * @param {function} onClick  The function to be run when link is clicked
 * @param {string} negativeStyling  If true, the work will get inverted colors in styling.
 * @param {string} children
 */
const WorkLink = ({ url, onClick, negativeStyling, children }) => (
  <div>
    <a
      className={ negativeStyling ? 'Link Link--negative' : 'Link' }
      href={url}
      onClick={ onClick }>{ children }
    </a>
    <Global />
    <style jsx>{`
      .Link {
        background-color: var(--white);
        border: 1px solid var(--black);
        display: block;
        font-size: 1.2rem;
        margin-top: 1.2rem;
        transition: all 300ms ease;
        padding: 0.7rem 1rem 0.5rem;
        position: relative;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        width: 100%;
      }

      .Link--negative {
        background-color: var(--black);
        border: 1px solid var(--white);
      }

      .Link:hover {
        background-color: var(--black);
        color: var(--white);
      }

      .Link--negative:hover {
        background-color: var(--white);
        color: var(--black);
      }

      @media screen and (min-width: 600px) {
        .Link {
          width: 12rem;
        }
      }
    `}
    </style>
  </div>
);

export default WorkLink;
