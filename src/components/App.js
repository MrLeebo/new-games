import React from 'react';
import { Container } from 'reactstrap';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { asyncComponent } from '@shared/components';

export const GameDetail = asyncComponent(() =>
  import(/* webpackChunkName: "GameDetail" */ './GameDetail')
);

export const Main = asyncComponent(() =>
  import(/* webpackChunkName: "Main" */ './Main')
);

export default function App() {
  return (
    <Container>
      <HashRouter>
        <Switch>
          <Route path="/games/:guid" component={GameDetail} />
          <Route component={Main} />
        </Switch>
      </HashRouter>
    </Container>
  );
}
