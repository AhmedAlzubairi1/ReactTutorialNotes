import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);
  /*
  Note: if you refresh on favorites page, everything is gone
        if you refresh on all meetups page, it is still there. Why? 
        
        Simple, contexts/states are stored in memory, not local storage. 
        So if you do a hardrefresh, everything gets reset. 
        WE changed favorites count dynamically, so it will change to 0 if we refresh

        The reason why all meetups doens't reset is because we get that data from firebase
  */

  return (
    <section>
      <h1>My Favorites</h1>
      {favoritesCtx.totalFavorites === 0 ? (
        <p>You have no favorites. Start adding some</p>
      ) : (
        <MeetupList meetups={favoritesCtx.favorites}></MeetupList>
      )}
    </section>
  );
};

export default FavoritesPage;
