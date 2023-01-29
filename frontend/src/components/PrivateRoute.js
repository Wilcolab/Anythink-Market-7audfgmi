import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component, currentUser, ...rest }) {
    return (
      <Route
        {...rest}
        component={() =>
          currentUser ? (
            component
          ) : (
            <Redirect to={ "/login"}
            />
          )
        }
      />
    );
  }
  
  export default PrivateRoute;