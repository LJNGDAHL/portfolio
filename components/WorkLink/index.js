import Link from 'next/link'; // TODO: Use Link?
import Global from '../Global';

const WorkLink = ({ id, onClick, children }) => (
  <div>
    <a className="Link" href={`/work/${id}`} onClick={ onClick }>{ children }</a>
    <Global />
    <style jsx>{`
    .Link {
        border-bottom: 4px solid var(--yellow);
        display: block;
        width: 10rem;
        font-size: 1.2rem;
        font-weight: 700;
        transition: all 300ms ease;
        padding: 0.7rem 0.2em 0.5rem;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;
      }

      .Link::after {
        background: var(--yellow);
        bottom: 0;
        content: "";
        height: 0;
        left: 0;
        opacity: 1;
        position: absolute;
        transition: height 250ms ease;
        width: 100%;
        z-index: -1;
      }

      .Link:hover::after {
        height: 100%;
      }
    `}
    </style>
  </div>
);

export default WorkLink;
