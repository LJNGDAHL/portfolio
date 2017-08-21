export default function Statusbar({ data }) {
  return (
    <div className="Statusbar">
      <p>{ data.message ? data.message : 'I haven\'t found nothing' }</p>
      <style jsx>{`
        .Statusbar {
          background-color: var(--black);
          color: var(--white);
          padding: 0.7rem;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
        }

        button {
          color: var(--black);
        }

      `}</style>
    </div>
  );
}
