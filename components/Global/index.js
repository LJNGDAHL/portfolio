// These are the global styles imported on every page.
// Using with SUIT CSS naming convention.
export default function Global() {
  return (
    <style jsx global>{`
      :root {
        --midnight: #140F30;
        --egyptian: #0C7BF9;
        --vermilion: #ED403A;
        --carmine: #F43029;

        --black: #0F0E0E;
        --white: #F9F9F9;
        --greyish: #F2F2F2;
        --yellow: #F8E981;
        --lightYellow: #F9F7E7;
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
        font-size: 1.2rem !important;
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

      .u-fontSmoothing {
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }

      .u-semiBold {
        font-weight: 400 !important;
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

      /**
      * Margins and paddings
      */
      .u-marginTopXL {
        margin-top: 30vh !important;
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
}
