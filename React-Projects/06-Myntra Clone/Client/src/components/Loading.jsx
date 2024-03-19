function Loading() {
  return (
    <center style={{ margin: "10%" }}>
      <div
        className="spinner-grow text-center"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
}

export default Loading;
