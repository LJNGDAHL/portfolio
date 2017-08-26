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
        --white: #F9F9F9;

        {/* TODO: Figure out what to do with this */}
        background-color: var(--midnight);
      }

      @font-face {
        font-family: 'Lazer84';
        src: url('../static/fonts/lazer84-webfont.woff2') format('woff2'),
            url('../static/fonts/lazer84-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }

      * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        color: currentColor;
        margin: 0;
      }

      /**
      * Font sizes
      */
      .u-fontL {
        font-size: 3rem !important;
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

      .u-semiBold {
        font-weight: 400 !important;
      }

      .u-colorCarmine {
        color: var(--carmine);
      }

      /**
      * Margins and paddings
      */
      .u-marginBottom {
        margin-bottom: 1rem !important;
      }

      .u-noPadding {
        padding: 0 !important;
      }

    `}
    </style>
  );
}
