import Link from 'next/link'; // TODO: Use Link?
import Global from '../Global';

const WorkLink = ({ id, onClick, children }) => (
  <div>
    <a className="Link" href={`/work/${id}`} onClick={ onClick }>{ children }</a>
    <Global />
    <style jsx>{`
    .Link {
        border: 2px solid var(--carmine);
        color: var(--white);
        cursor: pointer;
        display: block;
        font-size: 1.2rem;
        font-weight: 400;
        max-width: 15rem;
        margin: 2rem auto 2rem;
        text-align: center;
        transition: all 300ms ease;
        padding: 0.7rem 3rem 0.5rem;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;
        font-smoothing: antialiased;
        -webkit-font-smoothing: antialiased;
      }

      .Link::after {
        background: var(--white);
        content: "";
        height: 0;
        width: 100%;
        bottom: 0;
        left: 0;
        opacity: 1;
        position: absolute;
        transition: height 250ms ease;
        z-index: -1;
      }

      .Link:hover {
        border: 2px solid var(--white);
        color: var(--carmine);
      }

      .Link:hover::after {
        height: 100%;
      }

    `}
    </style>
  </div>
);

export default WorkLink;
