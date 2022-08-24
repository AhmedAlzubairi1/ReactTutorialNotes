import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom"; //this is the useHistory hook
const NewMeetupPage = () => {
  //We will give the child NewMeetupForm a method that can make the http call

  const navagate = useNavigate(); //this will give us power to navigate. WE will exit this tab after we submit new meetup

  const addMeetupHandler = (meetupData) => {
    //We eget this url from our firebase real time database
    /*
    in firebase, the stuff after .com/ is a folder. if it doesnt exist, it will make it
    you would then also need to add .json in the end
    */
    fetch(
      "https://react-meetup-project-95a2e-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      //this code is executed once the promise of fetch is finished
      //We want to go to the url '/'
      //if we use replace, it will tkae the current hisotry url and send it to /
      //Now goign back tab wont send you back to previous, this is because it is repalcing the current tab session
      navagate("/", { replace: true });
    });
  };
  return (
    <section>
      <h1> Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
