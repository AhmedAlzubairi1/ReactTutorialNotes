import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context"; //this is the Favorites context object
const MeetupItem = (props) => {
  const favoriteCtx = useContext(FavoritesContext);
  //This will be what we put in the value prop in the FavoritesContext.Provider component
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = (event) => {
    //Here we need data from the context of FavoritesContext.Provider in index.js
    /*
    we get those values in the Component by using useContext hook
    useContext makes connection from this component to the context
    You need to provide the context object created from createContext, not the component
    */

    if (itemIsFavorite) {
      //we remove it

      favoriteCtx.removeFavorite(props.id);
    } else {
      const item = {
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      };
      favoriteCtx.addFavorite(item);
    }
  };
  //Here we treat Card as a wrapper Componenet
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.context}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};
export default MeetupItem;
