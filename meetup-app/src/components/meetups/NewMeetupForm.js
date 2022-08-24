import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react"; //we use this to reference tags in the DOM

const NewMeetupForm = (props) => {
  //See, we are able to use card wrapper here too
  //instead of for, you do htmlFor
  /*
    By defult, if you have a button in a form, it will trigger a submission,
    to prevent the default onsubmit, we specify it with submitHandler
    It is a good thing to prevent the default submit button because it will trigger a refresh
    and react hates refresh lol
  */
  const titleInputRef = useRef(); //this means set this to reference something in dom, specifically title
  // you would then need to have keyterm ref inside the tag you want to connect to
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault(); //we prevent stuff like refreshing and reading
    const enteredTitle = titleInputRef.current.value; //current is the current tag, value is an attribute part of input tag. Specificlaly value is the text
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    //Now we add this data to the parent function by calling the function it gave us in props
    props.onAddMeetup(meetUpData);
    //console.log(meetUpData);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id="title" ref={titleInputRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Meetup Image</label>
        <input type="url" required id="image" ref={imageInputRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" required id="address" ref={addressInputRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          required
          rows="5"
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  );
};
export default NewMeetupForm;
