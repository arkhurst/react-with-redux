import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TopLoader } from "../components/loader";
import { HOME, USER_ADD, NOT_FOUND, USER_EDIT } from "./constants";

const Home = React.lazy(() => import("../pages/users"));
const UserAdd = React.lazy(() => import("../pages/user-add"));
const UserEdit = React.lazy(() => import("../pages/user-edit"));
const HandleNotFound = React.lazy(() => import("../pages/404"));

const RouterConfig: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={TopLoader()}>
          <Switch>
            <Route component={UserAdd} path={USER_ADD} exact />
            <Route component={UserEdit} path={USER_EDIT} exact />
            {/* handle 404s */}
            <Route exact={true} component={HandleNotFound} path={NOT_FOUND} />
            <Route component={Home} path={HOME} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default RouterConfig;
