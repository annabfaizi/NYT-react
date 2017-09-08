import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Main from "../components/Main";

const routes = (
  <BrowserRouter>
    <Route path="/" component={Main}>
    </Route>
  </BrowserRouter>
);

export default routes;