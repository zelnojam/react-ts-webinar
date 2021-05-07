import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router";
import routes from "../routes";
import PageNotFound from "../pages/404/PageNotFound";
import EditUser from "../pages/user/Edit";

const Content: React.FC<{}> = () => {
  return (
    <Layout.Content style={{ padding: "1rem 1rem 0" }}>
      <div
        style={{ backgroundColor: "white", height: "100%", padding: "0.5rem" }}
      >
        <Switch>
          {routes.map(({ uri, Component, sub }) =>
            Array.isArray(sub) ? (
              sub.map((value) => (
                <Route
                  exact
                  path={`${uri}${value.uri}`}
                  children={<value.Component />}
                  key={`${uri}${value.uri}`}
                />
              ))
            ) : (
              <Route exact path={uri} children={<Component />} key={uri} />
            )
          )}
          <Route path="/users/edit/:id" children={<EditUser />} />
          <Route path="*" children={<PageNotFound />} />
        </Switch>
      </div>
    </Layout.Content>
  );
};

export default Content;
