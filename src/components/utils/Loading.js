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
        src="https://cdn.dribbble.com/users/940782/screenshots/3533101/plane-loader-slower.gif"
        style={{ height: 250, width: "auto" }}
      />
    </div>
  );
};

export default Loading;
