import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../../components/Header";
const Dashboard = lazy(() => import("../Dashboard"));
const Blog = lazy(() => import("../Blog"));

const Root = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/blog" component={Blog} />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    </>
  );
};

export default Root;
