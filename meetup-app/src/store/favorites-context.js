/*
This manages states throughout the project. 
It is like React's built in solution to Redux
*/
import { createContext, useState } from "react";
//Paramters is the initial state of our context
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
}); //returns JS object. Specifically it will contain a react component, so we start w/ capital character for components names

//make functions to change the state of the context
//It will be a regular React component, but gives other components the ability to update them
export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);
  const addFavoriteHandler = (favoriteMeetup) => {
    //NOTE: IMPORTANT!!!
    /*
        here we can update our state by using setUserFavorites, but we shouldn't simply
        include the last state + current. This is because there is a chance that userFavorites
        didn't update fast enough to reflect the change. 
        How do we fix it? 
        We pass a function. the inpur paramter is automatically going to be the previous state
      */

    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };
  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };
  const itemFavoriteHandler = (meetupId) => {
    //some returns true if any is true
    const temp = userFavorites.some((meetup) => meetup.id === meetupId);
    return temp;
  };
  //we want context aka the thing in value to be tje data and all modification methods
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemFavoriteHandler,
  };

  //You would return a Provider component from the context you made and then use it
  // to wrap all the components that need to interact with the context
  //Again, everything that FavoriteContext.Provider is wrapped under will have access to the context/state
  //Idea is we would wrape app.js so everything under app.js would have access to it

  //Also, Provider expects value prop which is initial values
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
//Two exports: our favoriteContext object and FavoriteCOntextProvider component
export default FavoritesContext;
