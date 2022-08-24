const Modal = (props) => {
  const cancelHandler = () => {
    props.onCancel();
  };
  const confirmHandler = () => {
    props.onConfirm();
  };

  //onClick had wrapper functions. Instead of that could have put props.onConfirm or props.onCancel
  return (
    <div className="modal">
      <p>Are you Sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
