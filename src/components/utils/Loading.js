import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        alt="Loading gif"
        src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-16.jpg"
        style={{ height: 150, width: "auto" }}
      />
    </div>
  );
};

export default Loading;
