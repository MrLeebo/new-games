import React from 'react';
import { Media } from 'reactstrap';
import { games } from '../ajax';
import Placeholder from './Placeholder';
import GameMedia from './GameMedia';

function renderMedia(game) {
  return <GameMedia key={game.guid} game={game} />
}

export default function Main() {
  return (
    <React.Fragment>
      <h5 className="py-3">New Games</h5>
      <Placeholder fetch={games} fallback={"Loading..."}>
        {data => (
          <Media list>
            {data.results.map(renderMedia)}
          </Media>
        )}
      </Placeholder>
    </React.Fragment>
  )
}
