export default function Video() {
  return (
    <div className="Video">
      {/* TODO: Remove autoPlay once video is out of viewport */}
      <video loop muted autoPlay playsInline>
        <source src="../../static/media/background.mp4" type="video/mp4" />
      </video>
      <style jsx>{`
        .Video {
            align-items:center;
            display: flex;
            height: 100vh;
            justify-content:center;
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            overflow: hidden;
          }

        .Video video {
          position: relative;
          min-width: 100vw;
          min-height: 100vh;
          flex-shrink: 0;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
