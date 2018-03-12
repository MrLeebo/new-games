import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import PlatformTags from './PlatformTags';
import './GameMedia.css'

export default function GameMedia({game}) {
  return (
    <Media tag="li" className="py-3">
      <Media tag={Link} to={`/games/${game.guid}`}>
        <Media tag="div" left>
          <Media object src={game.image.icon_url} alt="" className="mr-3" />
        </Media>
        <Media body>
          <div>{game.name}</div>
          <div>
            <small className="text-muted">
              {game.deck}
            </small>
          </div>
          <PlatformTags platforms={game.platforms} />
        </Media>
      </Media>
    </Media>
  )
}
