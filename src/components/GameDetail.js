import React from 'react';
import { Link } from 'react-router-dom';
import { withHandlers } from 'recompose';
import { Button, Media } from 'reactstrap';
import { Placeholder } from '@shared/components';
import PlatformTags from './PlatformTags';
import { game } from '../ajax';

export function GameDetail(props) {
  return (
    <React.Fragment>
      <Button tag={Link} to="/" color="link">Back</Button>
      <Placeholder fetch={props.getGame} fallback="Loading...">
        {data => (
          <Media>
            <Media left>
              <Media object src={data.results.image.small_url} />
            </Media>
            <Media body>
              <PlatformTags platforms={data.results.platforms} />
              <div className="pull-left" dangerouslySetInnerHTML={{ __html: data.results.deck }} />
            </Media>
          </Media>
        )}
      </Placeholder>
    </React.Fragment>
  )
}

export default withHandlers({
  getGame: props => game(props.match.params.guid)
})(GameDetail);
