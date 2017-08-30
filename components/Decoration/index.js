import Global from '../Global';

/**
 * Yellow Decoration box, used in Work component.
 */
const Decoration = ({ styles }) => {
  return (
    <div>
      <div className={ styles }></div>
      <Global />
      <style jsx>{`
        /**
        * 1. Compensation due to not animating when js is disabled.
        */
        .Decoration {
          background-color: var(--yellow);
          content: "";
          width: 10rem;
          height: 20rem;
          position: absolute;
          top: calc(2rem - 100px); /* 1. */
          z-index: 1;
        }

        :global(.has-js) .Decoration {
          top: 2rem;
          opacity: 0;
        }

        .Decoration--single {
          animation: decoration 600ms 400ms forwards var(--slide);
          top: 4rem;
          z-index: 1;
        }

        .Decoration.Decoration--inverted {
          background-color: var(--transparentYellow);
          height: 10rem;
          left: -10%;
          top: 15rem;
          width: 70%;
        }

        :global(.has-js) .Decoration--visible {
          animation: decoration 800ms 200ms forwards var(--slide);
        }

        @keyframes decoration {
              0% {
                opacity: 0;
                transform: translateY(0);
              }
              100% {
                transform: translateY(-100px);
                opacity: 1;
              }
            }
      `}
      </style>
    </div>
  );
};

export default Decoration;
