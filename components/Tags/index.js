import Global from '../Global';

/**
 * Used in Works Component to display frameworks and libraries used in
 * current project.
 */
const Tags = ({ tags, styles }) => (
  <div className={ styles }>
    <h3 className="u-upperCase u-italic">Libraries and frameworks</h3>
    <p className="u-fontXS u-marginBottom u-marginTopS">This project uses the following libraries and frameworks:</p>
    <ul className="TagList">
      { tags.map(tag => (
        <li className="Tag" key={ tag.text }>{ tag.text }</li>
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

      .Tags--inverted {
        border: 1px solid var(--greyish);
      }

      .TagList {
        list-style-image: url(../../static/media/plus.svg);
        padding-left: 1rem;
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
