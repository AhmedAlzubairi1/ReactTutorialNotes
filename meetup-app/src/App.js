import { Route, Routes } from "react-router-dom";
// Job of route is to listen for changes in url and decide what components are shown for what route
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";
function App() {
  //path is the url after the .com. Can legit just be / to handle the default path
  //Now depending on what route is called, that component is used
  //NOTE: Route byitself checks left to right for matches, thus for /favorites, both / and /favorites would be triggered
  //We then would like to use swtich to avoid this and have only /favorites be displayed
  //Switch would only trigger the momment it sees something like it. So if we do /fav, / would be triggered by switch
  //because it is the first thing that is matched.
  //To fix this issue, have exact prop to make sure it finds exact match only

  //Main Navaction will trigger changes in url link, which is than catched by Routes
  //Main Navagation is inside layout and layout will be the wrapper
  //all the stuff inbetween layout tag would be displayed in the layout.children in props
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>

        <Route path="/new-meetup" element={<NewMeetupPage />}></Route>

        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
