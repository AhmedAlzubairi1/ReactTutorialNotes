const Backdrop = (props) => {
  //we add the onclick to be the onclicik provided by the thing creating the component
  return <div className="backdrop" onClick={props.onCancel} />;
};
export default Backdrop;
