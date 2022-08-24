import classes from "./Card.module.css";
const Card = (props) => {
  //Here Card will be a wrapper for other components
  //props.children is the code under the Card component tag
  return <div className={classes.Card}>{props.children}</div>;
};
export default Card;
