import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";
const AllMeetupsPage = () => {
  /*
  So we have an issue here, we want to make a get request, but AllMeetupsPage can't be async
  how do we make sure return only happens after fetch?
  Well, we first return dummy data, then call fetch, then update the data by changing the state
  so lets useState hook this thing :) 
  */
  const [isLoaded, setLoaded] = useState(false); //set to false because we have dummy data initially
  const [loadedMeetups, setLoadedMeetups] = useState([]); //I can have as many useStates as i want
  /*
  useEffect
  it takes two paramters, first is funciton. useEffect says that you want this function to only be called 
  if a certain case happens. This is defined by the second parameter. If the second variable is not provided
  it will always run. Same as if you didn't have useEffect at all

  second paramter:
  react will check all the values in this list and compare it to the state of those 
  values when useEffect was executed the last time changes. If they are different, 
  useEffect is called again. if they are the same, useEffect isn't called

  this is why empty list makes sure useEffect is run once, because at first try you have 0 dependancies, next try you still
  have 0 depndancies, aka nothing changed to those dependancies. since there was no change, it will not execute useEffect


  GOOD RULE OF THUMB:
    those variables you put in the list should be all the external variables the useEffect makes reference to
    aka such as props or other external variables. 
    
    If you only plan to use useEffect once, leave it empty
  */
  useEffect(() => {
    //setLoaded
    fetch(
      "https://react-meetup-project-95a2e-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const meetups = [];
        //...data[key] means copy all the key value pairs and put it there
        //so id is the key from firebase, and everything else in the meetup will be
        //all the json data parsed already.
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        console.log(meetups);
        setLoaded(true);
        setLoadedMeetups(meetups);
      });
  }, []);
  if (!isLoaded) {
    //give dummy data while I am doing fetch
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups Page </h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
