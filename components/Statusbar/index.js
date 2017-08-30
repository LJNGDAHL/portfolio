import { connect } from 'react-redux';
import { Component } from 'react';

/**
 * Displays data from Github regarding latest commit.
 */
class Statusbar extends Component {
  render() {
    if (this.props.data && this.props.data.type === 'PushEvent') {
      // Use regex to match all characters in string until the letter "T"
      const created = this.props.data.type.created_at.match(/^[^T]*/)[0];
      const commit = this.props.data.type.payload.commits[0].message;
      const repo = this.props.data.type.repo.name;
      const repoURL = `https://github.com/${this.props.data.type.repo.name}`;

      return (
        <div className="Statusbar">
          <p className="u-bold u-upperCase">Latest Git Commit ({ created })</p>
          <p className="u-italic">{ commit }
            <a className="StatusbarLink" href={ repoURL }> in { repo }</a>
          </p>
          <style jsx>{`
            .Statusbar {
              animation: slideIn 600ms 1000ms forwards var(--slide);
              background-color: var(--black);
              bottom: 6rem;
              color: var(--white);
              margin: 5%;
              opacity: 0;
              padding: 2rem 2.5rem 3rem;
              position: absolute;
              transform: translateY(100%);
              width: 90%;
            }

            @keyframes slideIn {
              0% {
                opacity: 0;
                transform: translateY(100%);
              }
              100% {
                opacity: 1;
                transform: none
              }
            }

            .StatusbarLink {
              color: var(--yellow);
              text-decoration: none;
              transition: color 300ms ease;
            }

            .StatusbarLink:hover {
              color: var(--white);
            }

            /**
            * Media Queries
            */
            @media screen and (min-width: 600px) {
              .Statusbar {
                bottom: 1rem;
                left: 0;
                margin: 0;
                width: 25rem;
              }
            }
          `}</style>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    data: state.githubData
  };
}

export default connect(mapStateToProps)(Statusbar);
