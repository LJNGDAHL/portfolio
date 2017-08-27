import Global from '../Global';

const Tags = ({ tags, styles }) => (
  <div className={ styles }>
    <h3 className="TagsHeadline">Using</h3>
    <ul className="u-noPadding">
      {tags.map(tag => (
        <li className="Tag" key={ tag }><span className="innerTag">{ tag }</span></li>
      ))}
    </ul>
    <Global />
    <style jsx>{`
    .Tags {
      background-color: var(--egyptian);
      color: var(--white);
      flex-shrink: 0;
      margin-right: 2rem;
      max-height: 0;
      overflow: hidden;
      text-align: center;
      transition: max-height 500ms ease-out 600ms, opacity 500ms ease-out 600ms;
      width: 30%;
    }

    .TagsHeadline {
      text-transform: uppercase;
      margin-top: 1.4rem;
    }

    .Tags.expanded {
      max-height: 300px;
    }

    .Tag {
      color: inherit;
      list-style-type: none;
      position: relative;
    }

    .Tag:last-of-type {
      margin-bottom: 1rem;
    }
    `}
    </style>
  </div>
);

export default Tags;
