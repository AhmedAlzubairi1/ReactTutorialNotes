import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";
const MeetupList = (props) => {
  /*
  NOTE: IN JSX you can dynamically insert JSX elements that are in an array
  so you can return [<div>lol</div> , <div>asdsad</div>]
  */
  //ul means unordered list, so not exact same sequence everytime
  //REMEMBER that each child in the component needs a unique key
  /*
  This is one way of doing it, but we would want to use components instead
  so lets make a meetup list & meetup item
      <ul>
        {
          //we can return a list of jsx elements here
          DUMMY_DATA.map((meetup) => {
            return <li key={meetup.id}> {meetup.title} </li>;
          })
        }
      </ul>
  */
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
};
export default MeetupList;
