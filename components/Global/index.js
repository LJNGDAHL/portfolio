// These are the global styles imported on every page.
export default function Global() {
  return (
    <style jsx global>{`

      :root {
        --black: #212123;
        --blue: #03E9F8;
        --grey: #f2f2f2;
        --pink: #F2BCE0;
        --white: #F8F8F8;
      }

      * {
        box-sizing: border-box;
        font-family: 'Roboto', 'sans-serif';
        font-weight: 300;
        color: currentColor;
        margin: 0;
      }

      {/* TODO: Maybe this should be a vector instead?  */}
      @font-face {
        font-family: 'Lazer84';
        src: url('../static/fonts/lazer84-webfont.woff2') format('woff2'),
            url('../static/fonts/lazer84-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }

    `}
    </style>
  );
}
