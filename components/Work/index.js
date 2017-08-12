export default function Work({ children }) {
  return (
    <div className="Work">
      { children }
      <style jsx>{`
        .Work {
          background-color: var(--grey);
          padding: 2rem;
          margin-bottom: 1rem;
          width: 100%;
        }

        @media screen and (min-width: 600px) {
            .Work {
              width: 47vw;
            }
        }

      `}</style>
    </div>
  );
}
