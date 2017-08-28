import { connect } from 'react-redux';
import { Component } from 'react';

// TODO: Only to be used during testing
import { githubResponse } from '../../utils';

class Statusbar extends Component {
  render() {
    if (this.props.data) {
      // TODO: Replace githubResponse with this.props.data
      // Use regex to match all characters in string until the letter "T"
      const created = githubResponse[0].created_at.match(/^[^T]*/)[0];
      const commit = githubResponse[0].payload.commits[0].message;
      const repo = githubResponse[0].repo.name;
      const repoURL = `https://github.com/${githubResponse[0].repo.name}`;

      return (
        <div className="Statusbar">
          <p className="u-bold u-upperCase">Latest Git Commit ({ created })</p>
          <p className="u-italic">{ commit }
            <a className="StatusbarLink" href={ repoURL }> in { repo }</a>
          </p>
          <style jsx>{`
            .Statusbar {
              background-color: var(--black);
              bottom: -4rem;
              color: var(--white);
              font-size: 1rem;
              left: 10%;
              opacity: 0;
              padding: 2rem 2.5rem 3rem;
              position: absolute;
              transform: translateY(100%);
              width: 25rem;
              animation-name: slideIn;
              animation-duration: 600ms;
              animation-delay: 1750ms;
              animation-fill-mode: forwards;
            }

            @keyframes slideIn {
              from {
              opacity: 0;
              transform: translateY(100%);
              }
              to {
              opacity: 1;
              transform: none
              }
            }

            .StatusbarLink {
              color: var(--yellow);
              text-decoration: none;
              transition: color 150ms ease;
            }

            .StatusbarLink:hover {
              color: var(--carmine);
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
    data: state.githubData.data
  };
}

export default connect(mapStateToProps)(Statusbar);
