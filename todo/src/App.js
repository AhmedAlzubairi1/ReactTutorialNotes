/*
This component must return something that is rendered in the browser
Remember: This is JSX not html. So some changes. Ex) Instead of class, use className
Also remember, everything in JSX is not html, even the tags. h1 isn't h1 in html, it is h1 in JSX. It just so happens that
they do the same thing. WHy does this matter? Because since h1 is a component, we can add props to it. 

Instead of doing event listener to a div, we now just add that value into its props
*/
import Todo from "./components/Todo";

function App() {
  // All the info in Todo header is passed as props object in Todo component
  return (
    <div>
      <h1>My Todos</h1>

      <Todo text="Learn React"></Todo>
      <Todo text="Master React"></Todo>
      <Todo text="Explore React"></Todo>
    </div>
  );
}

export default App;
