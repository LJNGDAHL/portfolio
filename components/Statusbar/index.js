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
          <p className="Statusbar__headline">Latest Git Commit ({created})</p>
          <p className="Statusbar__content">{commit}
            <a className="Statusbar__link" href={repoURL}> in {repo}</a>
          </p>
          <style jsx>{`
            .Statusbar {
              background-color: var(--black);
              font-size: 0.8rem;
              color: var(--white);
              padding: 0.7rem;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
            }

            .Statusbar__headline {
              color: var(--blue);
              margin-bottom: 0.1em;
              font-weight: 400;
            }

            .Statusbar__link {
              font-weight: 300;
              text-decoration: none;
              opacity: 0.5;
              transition: opacity 150ms ease, color 150ms ease;
            }

            .Statusbar__link:hover {
              color: var(--blue);
              opacity: 1;
            }

            .Statusbar__content--italic {
              font-style: italic;
            }

            button {
              color: var(--black);
            }

          `}</style>
        </div>
      );
    } else {
      return (
        <div className="Statusbar"></div>
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
