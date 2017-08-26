import Link from 'next/link';
import Global from '../Global';

export default function Anchor({ url, children, cssClass = 'Anchor' }) {
  return (
    <div>
      <Link>
        <a href={ url } className={ cssClass } >{ children }</a>
      </Link>
      <Global />
      <style jsx>{`
        .Anchor, .Headline-link {
          color: var(--white);
          border-bottom: 1px solid currentColor;
          padding-bottom: 0.2em;
          text-decoration: none;
          margin: 0.4em; {/* FIXME: This should not be added on all */}
          transition: color 250ms ease-in-out, border 250ms ease-in-out;
        }

        .Anchor:hover, .Headline-link:hover {
          color: var(--vermilion);
        }

      `}</style>
    </div>
  );
}
