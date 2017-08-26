import Global from '../Global';

const Tags = ({ tags }) => (
  <div>
    <ul className="u-noPadding">
      {tags.map(tag => (
        <li className="Tag" key={ tag }><span className="innerTag">{ tag }</span></li>
      ))}
    </ul>
    <Global />
    <style jsx>{`
    .Tag {
      display: inline-block;
      color: var(--egyptian);

      padding: 0.5rem 1rem;
      list-style-type: none;
      position: relative;
      margin: 0.5rem 0;

    }

    {/* Adds a skewed vertical line between the tags */}
    .Tag:not(:last-of-type)::after {
        bottom: 0;
        border-right: 2px solid var(--egyptian);
        content: "";
        height: 100%;
        width: 100%;
        left: 0;
        transform: skewX(-25deg);
        position: absolute;
      }
    `}
    </style>
  </div>
);

export default Tags;
