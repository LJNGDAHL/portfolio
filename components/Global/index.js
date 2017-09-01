/**
 * These are the global styles imported on every page.
 * This project uses SUIT CSS naming convention.
 */
const Global = () => {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700');

      :root {
        --black: #0F0E0E;
        --white: #F9F9F9;
        --greyish: #F2F2F2;
        --yellow: #F8E981;
        --lightYellow: #F9F7E7;
        --transparentYellow: rgba(234, 210, 53, 0.5);
        --slide: cubic-bezier(0.075, 0.82, 0.165, 1);
      }

      html {
        background-color: var(--greyish);
      }

      * {
        box-sizing: border-box;
        font-family: 'Libre Baskerville', serif;
        font-weight: 400;
        color: currentColor;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-smoothing: antialiased;
      }

      /**
      * Font sizes
      */
      .u-fontXL {
        font-size: 7rem !important;
      }

      .u-fontL {
        font-size: 2.5rem !important;
      }

      .u-fontM {
        font-size: 1.5rem !important;
      }

      .u-fontS {
        font-size: 1.2rem !important;
      }

      .u-fontXS {
        font-size: 0.9rem !important;
      }

      /**
      * Typography
      */
      .u-upperCase {
        text-transform: uppercase !important;
      }

      .u-italic {
        font-style: italic !important;
      }

      .u-lineHeightL {
        line-height: 1.5 !important;
      }

      .u-semiBold {
        font-weight: 400 !important;
      }

      .u-bold {
        font-weight: 700 !important;
      }


      /**
       * Colors
       */
      .u-colorWhite {
        color: var(--white) !important;
      }

      .u-colorYellow {
        color: var(--yellow) !important;
      }

      .u-colorBlack {
        color: var(--black) !important;
      }

      /**
      * Margins and paddings
      */
      .u-marginTopXL {
        margin-top: 30vh !important;
      }

      .u-marginTopS {
        margin-top: 0.5rem !important;
      }

      .u-marginBottom {
        margin-bottom: 1rem !important;
      }

      .u-marginAuto {
        margin: 0 auto !important;
      }

      .u-noPadding {
        padding: 0 !important;
      }

      /**
      * Flex utilities
      */
      .u-flex {
        display: flex !important;
      }

      .u-alignStart {
        align-items: flex-start !important;
      }
    `}
    </style>
  );
};

export default Global;
