export default function Video() {
  return (
    <div className="Video">
      <video loop muted autoPlay playsInline>
        <source src="../../static/media/background.mp4" type="video/mp4" />
      </video>
      <style jsx>{`
        .Video {
            align-items: center;
            display: flex;
            height: 100vh;
            justify-content: center;
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            overflow: hidden;
            z-index: -1;
          }

        .Video video {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
