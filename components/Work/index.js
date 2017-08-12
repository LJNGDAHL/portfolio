export default function Work({ children }) {
  return (
    <div className="Work">
      { children }
      <style jsx>{`
        .Work {
          border: 5px solid var(--grey);
          padding: 2rem;
          margin: 2rem auto;
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
