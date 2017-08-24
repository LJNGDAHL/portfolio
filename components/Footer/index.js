import Anchor from '../Anchor';

export default function Footer() {
  return (
    <div className="Footer">
      <h2>Katarina Ljungdahl | Developer</h2>
      <div className="Contacts">
        <Anchor url="https://github.com/LJNGDAHL/">Github</Anchor>
        <Anchor url="https://www.linkedin.com/in/katarinaljungdahl/">Linkedin</Anchor>
        <Anchor url="https://twitter.com/LJNGDAHL/">Twitter</Anchor>
      </div>
      <style jsx>{`
        .Footer {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 30vh;
          width: 100%;
        }

        .Contacts {
          display: flex;
        }
      `}</style>
    </div>
  );
}
