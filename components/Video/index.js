import { Component } from 'react';
import Global from '../Global';

class Video extends Component {
  constructor() {
    super();

    this.state = {
      ready: false
    };
  }

  componentWillMount() {
    this.setState({ ready: true });
  }

  render() {
    const styles = this.state.ready ? 'Video fadeIn' : 'Video';

    return (
      <div className={ styles }>
        <video loop muted autoPlay playsInline>
          <source src="../../static/media/background.mp4" type="video/mp4" />
        </video>
        <Global />
        <style jsx>{`
          .Video {
              align-items: center;
              display: flex;
              height: 100vh;
              justify-content: center;
              position: fixed;
              left: 0;
              top: 0;
              width: 100vw;
              overflow: hidden;
              z-index: -1;
            }

            .Video.fadeIn {
              animation-name: fadeIn;
              animation-duration: 2000ms;
              animation-timing-function: ease-out;
              animation-fill-mode: forwards;
            }

            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }

            {/* TODO: Decide on what to do with this */}
            .Video::after {
            background: var(--midnight);
            content: "";
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            opacity: 0.5;
            position: absolute;
          }

          .Video video {
            flex-shrink: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default Video;
