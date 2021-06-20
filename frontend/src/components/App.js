import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/RouteUtil";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBarContainer from "./nav/NavbarContainer";
import BusinessContainer from "./business/BusinessContainer";
import MainPageContainer from "./main/MainPageContainer";
import Modal from "../components/modal/Modal";
import BusinessesContainer from "./business/BusinessesContainer";
import FamilyStyle from "./familystyle/FamilyStyle";
import CartContainer from "./cart/CartContainer"

import MapBoxContainer from "./map/map_container"

const App = () => (
  <div>
    <Modal />
        <nav>
          <NavBarContainer />
        </nav>
        <Switch>
					<Route exact path="/familystyle" component={FamilyStyle} />
					<ProtectedRoute exact path="/carts/:userId" component={CartContainer} />
					<Route exact path="/homecooks" component={BusinessesContainer} />
					<Route exact path="/homecook/:id" component={BusinessContainer} />
          <Route exact path="/" component={MainPageContainer} />
					<Redirect to="/" />
        </Switch>
  </div>
);

export default App;
