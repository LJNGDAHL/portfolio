import Global from '../Global';

/**
 * Used in Works Component to display frameworks and libraries used in
 * current project.
 */
const Tags = ({ tags, negativeStyling }) => (
  <div className={ negativeStyling ? 'Tags Tags--negative' : 'Tags' }>
    <h3 className="u-upperCase u-italic">Libraries and frameworks</h3>
    <p className="u-fontXS u-marginBottom u-marginTopS">This project uses the following libraries and frameworks:</p>
    <ul className="TagList">
      { tags.map(tag => (
        <li className="Tag" key={ tag }>{ tag }</li>
      )) }
    </ul>
    <Global />
    <style jsx>{`
      .Tags {
        background-color: var(--black);
        color: var(--white);
        margin: 0 auto;
        padding: 2rem 2.4rem 3rem;
        width: 100%;
      }

      .Tags--negative {
        border: 1px solid var(--greyish);
      }

      .TagList {
        padding-left: 1rem;
        list-style-image: url(../../static/media/plus.svg);
      }

      .Tag {
        line-height: 1.5;
      }

      .Tag:first-letter {
        text-transform: uppercase;
      }

      /**
      * Media Queries
      */
      @media screen and (min-width: 900px) {
        .Tags {
          width: 15rem;
        }
      }
    `}
    </style>
  </div>
);

export default Tags;
