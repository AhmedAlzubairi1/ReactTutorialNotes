//useState is a reactHook and can only be used inside components
import { useState } from "react"; //import useState hook
//function should start with capital character
//Props are JS objects where all the attributes are available as key/value
/*
Also remember, everything in JSX is not html, even the tags. h1 isn't h1 in html, it is h1 in JSX. It just so happens that
they do the same thing. WHy does this matter? Because since h1 is a component, we can add props to it. 

Instead of doing event listener to a div, we now just add that value into its props
*/
import Backdrop from "./Backdrop";
import Modal from "./Modal";
function Todo(props) {
  //useState will always return two elements. First one is the current state snapshot, next one is function that allows you to change that value
  // ->   As a result, since state is described w/ one boolean, modalIsOpen will be an array of 1 boolean and setModalIsOpen will be a function to change that boolean
  //useState parameters is a list of all parameters we want to represent the initial state. In this case it is false
  //if a state is changed, the component of the state is rerendered
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // {} means this should be treated as JS expression
  const deleteHandler = (event) => {
    console.log("hello");
    console.log("clicked" + props.text);
    setModalIsOpen(true);

    // This would change the text of the button: event.target.textContent = "lol";
  };
  const closeModalHandler = (event) => {
    setModalIsOpen(false);
    //this is how you stop propagation of onClick method
    //event.stopPropagation();
  };
  //here we have <modal> appear if modalisOpen state is true
  // {modalIsOpen && <Backdrop />} means same thing as last line. It says if both paramters are true, output second parameter

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null}

      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
  // Note: we cant do something like : <Backdrop onclick=__/>. This is because onClick event can be applied only
  // to native jsx tags like button, div, ect. Not Components we made.
  //If we wanted to add an onclick functionality, we add the onClick into the Backdrop render function
  //AGAIN! everything next to a component header is treated as props
}
export default Todo;
