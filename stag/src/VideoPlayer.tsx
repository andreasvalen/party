export const videolinkFatty =
  "https://www.youtube.com/embed/ZphymMuNEIM?autoplay=1";

export const videolinkSnek =
  "https://www.youtube.com/embed/WVDs9NTltSo?autoplay=1";
export const videolinkRick =
  "https://www.youtube.com/embed/mUeAqVOpjeg?autoplay=1";

export const VideoPLayer = ({
  url,
  setShowValue,
}: {
  url: string;
  setShowValue: any;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidde",
        backgroundColor: `rgba(255, 255, 255, 0.2)`,
        zIndex: 10,
      }}
      onClick={() => {
        setShowValue(false);
      }}
    >
      <iframe
        width={`${window.innerWidth - 50}`}
        height={`${window.innerHeight - 50}`}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          borderRadius: "10px",
          transform: "translateY(-50%) translateX(-50%)",
        }}
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
