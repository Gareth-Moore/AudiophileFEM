const Modal = () => {
  const isCart = true;
  return (
    <div id="modal-card">
      {isCart ? (
        <div style={{ padding: "2rem", backgroundColor: "orange" }}>
          <h1>Here is my cart</h1>
        </div>
      ) : (
        <div style={{ padding: "2rem", backgroundColor: "orange" }}>
          <h1>Here is my Summary</h1>
        </div>
      )}
    </div>
  );
};

export default Modal;
