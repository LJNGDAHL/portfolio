import { Component } from 'react';
import { connect } from 'react-redux';

import { heroIsLoaded } from '../../actions';
import { isCached } from '../../utils';

import Contacts from '../Contacts';
import Header from '../Header';
import Statusbar from '../Statusbar';
import Global from '../Global';


/**
 * Content of initial first view
 * (above the fold)
 */
class Hero extends Component {
  /**
   * Only dispatch when mounting if image is already cached.
   */
  componentDidMount() {
    const heroImageSrc = '../../static/media/cover.jpg';
    if (isCached(heroImageSrc)) {
      this.props.dispatch(heroIsLoaded(true));
    }
  }

  /**
   * Dispatch when image is finished loading,
   * used to animate image.
   */
  handleImageLoading = () => {
    this.props.dispatch(heroIsLoaded(true));
  }

  render() {
    const imageStyles = this.props.heroIsLoaded ? 'HeroImage HeroImage--visible' : 'HeroImage';

    return (
      <div className="Hero">
        <Header />
        <Contacts />
        <div className="Title">
          <h1 className="Name">Katarina Ljungdahl</h1>
          <h2 className="Profession">Developer</h2>
        </div>
        <img onLoad={ this.handleImageLoading } className={ imageStyles } src="../../static/media/cover.jpg" />
        <Statusbar />
        <Global />
        <style jsx>{`
          .Hero {
            display: flex;
            height: 100vh;
            width: 100vw;
            position: absolute;
            z-index: 1;
          }

          .Title {
            margin: 30vh auto;
            text-transform: uppercase;
            z-index: 2;
          }

          .Name {
            animation: hero 1000ms 900ms forwards var(--slide);
            color: var(--white);
            font-size: 1.2rem;
            text-style: italic;
            opacity: 0;
          }

          .Profession {
            animation: hero 1000ms 1000ms forwards var(--slide);
            color: var(--yellow);
            font-size: 2.5rem;
            font-weight: bold;
            opacity: 0;
          }

          /**
           * This animation will only be used if javascript is disabled.
           * The delay of 2000ms is only an estimate since we don't have
           * information on when image is actually loaded.
           */
          .HeroImage {
            animation: hero 1000ms 2000ms forwards var(--slide);
            display: block;
            left: 5vw;
            position: absolute;
            top: 15vh;
            width: 90vw;
            z-index: 0;
            opacity: 0
          }

          /**
           * Remove animation from "HeroImage" if javascript is enabled.
           * The animation will instead be placed on .HeroImage--visible.
           */
          :global(.has-js) .HeroImage {
            animation: none;
          }

          :global(.has-js) .HeroImage--visible {
            animation: hero 1000ms 600ms forwards var(--slide);
          }

          /**
          * Sweet Yellow Box (only for appearance)
          */
          .Hero::after {
            animation: hero 1000ms 700ms forwards var(--slide);
            background-color: var(--transparentYellow);
            content: "";
            width: 70vw;
            height: 90vh;
            margin: 2rem 1rem;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            z-index: -2;
          }

          @keyframes hero {
            0% {
              opacity: 0;
              transform: translateY(50%);
            }
            100% {
              opacity: 1;
              transform: none
            }
          }

          /**
          * Media Queries
          */
          @media screen and (min-width: 600px) {
            .Title {
              margin: 40vh auto;
            }

            .Name {
              font-size: 2.5rem;
            }

            .Profession {
              font-size: 5rem;
            }
          }

          @media screen and (min-width: 900px) {
            .Profession {
              font-size: 7rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroIsLoaded: state.heroIsLoaded
  };
}

export default connect(mapStateToProps)(Hero);
