import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Switch>
          <Route path="/games/:guid" component={GameDetail} />
          <Route component={Main} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}
