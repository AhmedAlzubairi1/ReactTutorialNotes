import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import { Link } from "react-router-dom";
// Normally you would change the url w/ href tag.
/*
The problem with that is that it would make a new request
with Link, if we click the link and it changes the url, that url is catched and instead of the browser default of snending the request,
it will parse the url and output the components for that url

As you can see, the middle one refreshes the page, while the other two doesnt

*/

//This way, we can import specifics css to be visible only on this component.
//You would need to make a MainNavagation.module.css and then do this import statement,
//classes would now reference all the classes in the css file
import classes from "./MainNavagation.module.css";
const MainNavation = () => {
  const favoritesCtx = useContext(FavoritesContext);
  //In className, we are able to reference classe specifically uniquly to this component only
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <a href="/new-meetup">Add New Meetups</a>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavation;
