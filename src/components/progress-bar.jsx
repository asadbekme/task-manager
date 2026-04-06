const ProgressBar = () => {
  // score o'zgaruvchisi asosida dinamik rang beradigan progress bar yarating:
  const score = 27; // 0 dan 100 gacha

  // Rangni aniqlash
  let color = "green";
  if (score < 34) color = "red";
  else if (score < 67) color = "yellow";

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#eee",
        borderRadius: "5px",
        height: "24px",
        position: "relative",
        overflow: "hidden",
        margin: "8px 0",
      }}
    >
      <div
        style={{
          width: `${score}%`,
          backgroundColor: color,
          height: "100%",
          borderRadius: "5px 0 0 5px",
          transition: "width 0.3s",
        }}
      ></div>
      <span
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          color: score < 34 ? "#fff" : "#222",
        }}
      >
        {score}%
      </span>
    </div>
  );
};

export default ProgressBar;
