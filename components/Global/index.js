// These are the global styles imported on every page.
export default function Global() {
  return (
    <style jsx global>{`

      :root {
        --black: #212123;
        --blue: #03E9F8;
        --white: #F2F2F2;
      }

      * {
        font-family: 'Roboto', 'sans-serif';
        background-color: var(--white);
        color: var(--black);
      }

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
