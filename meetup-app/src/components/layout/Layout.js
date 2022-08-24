//this will be a wrapper
import classes from "./Layout.module.css";
import MainNavation from "./MainNavagation";
//this will be a wrapper of the layout
const Layout = (props) => {
  return (
    <div>
      <MainNavation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};
export default Layout;
