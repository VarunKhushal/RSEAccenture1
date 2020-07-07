import React, { Component } from 'react';
import { Layout, Header, Navigation, Switch, Route, Grid, Cell, Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


import Share from './SharePage';
import Profile from './ViewProfile';


export const Main = () => (
  <Switch> 
    
    <Route path='/'component={Share} />
    <Route path='/'component={Profile} />
  </Switch>


)
//export {Main}

class landing extends Component {
  render() {
    return (
      <div className="search">
        <Layout>
          <Header title="Accenture" scroll>
            <Navigation>
              <a href="/">Share NOW</a>
              
            </Navigation>
              <a href='/'>Search</a>          
          </Header>
        </Layout>
        <br />
        <br />
        <Projects />
      </div>
    );
  }
}

 export default landing;

export class Landing2 extends Component {
  render() {
    return (
      <div style={{width:'40%', margin:'auto'}}>
        
        Toilet peper
        <Grid className= "landing-grid">
          <Cell col={12}></Cell>
            <img
              src="https://cdn.shopify.com/s/files/1/0012/8440/7394/products/kleenex-small-roll-toilet-tissue-kleenex-12818116640866_450x450.jpg?v=1580212623"
              alt="toilet paper"
              className="toilet paper-img"
              />

        </Grid>
      </div>
    );
  }
}

// export default landing2;

export class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories() {

    if(this.state.activeTab === 2){
      return(
        <div>
          {/* toiletpaper 
          shadow={5} style={{minWidth: '450', margin: 'auto'}}
          */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:
          'url(https://cdn.shopify.com/s/files/1/0012/8440/7394/products/kleenex-small-roll-toilet-tissue-kleenex-12818116640866_450x450.jpg?v=1580212623) center/cover'}}  >Toilet Paper</CardTitle>

            <CardText>
              Toilet paper is in short now! 
            </CardText>
            
            <CardActions border>
              <Button colored> Description </Button>
              <Button colored> SHARE </Button>
              <Button colored> GET IT NOW</Button>
            </CardActions>
            
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Rice */  }
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:
        'url(https://assets.epicurious.com/photos/57d70c8ade27564257b657c6/master/pass/perfect-steamed-rice.jpg) center/cover'}}  >Milk</CardTitle>

        <CardText>
          There are lots of milk!
        </CardText>

          <CardActions border>
            <Button colored> Description </Button>
            <Button colored> SHARE </Button>
            <Button colored> GET IT NOW </Button>
          </CardActions>

          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
          </Card>   
        
          
          {/* Pet Food */  }
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:
          'url(https://cdn0.woolworths.media/content/wowproductimages/large/480251.jpg) center/cover'}}  >Pet Food</CardTitle>

          <CardText>
            Don't let your pets get hungry! 
          </CardText>
            
          <CardActions border>
            <Button colored> Description </Button>
            <Button colored> SHARE </Button>
            <Button colored> GET IT NOW </Button>
          </CardActions>
            
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>Accenture plc, is an Irish-domiciled multinational professional services company. A Fortune Global 500 company, it has been incorporated in Dublin, Ireland since 1 September 2009. </h1></div>
      )
    } else if(this.state.activeTab === 0) {
      return (
        <div><h1>We innovate to find ways to put individuals at the center of what we do and use our expertise to build an inclusive future where everyone can thrive.</h1></div>
      )
    }
  }

    render() {
      return(
        <div className="category-tabs">
          test
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => {
            this.setState({ activeTab: tabId });
            console.log(tabId);
           }} ripple>
            
            <Tab>Home</Tab>
            <Tab>Profile</Tab>
            <Tab>Items</Tab>
          </Tabs>

          {this.toggleCategories()}
        </div>

      )


    }


}