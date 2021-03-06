import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

export default class Middle extends React.Component {

  render() {
    return (
        <div className="murphys-background">
          <Grid container verticalAlign="middle" style={{height: '500px'}}>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"/>
              </Grid.Column>
              <Grid.Column>
                <h3>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block
                  off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.</h3>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
