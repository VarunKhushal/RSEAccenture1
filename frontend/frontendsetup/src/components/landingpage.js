import React, { Component } from 'react';
import {  Header, Navigation, Switch, Route, Grid, Cell, Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import AutoCompleteText from './AutoCompleteText';
import {Redirect} from 'react-router';

import Share from './SharePage';
import Profile from './ViewProfile';
import GetItNow from './getItNow';


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
        
          <Header title="Accenture" scroll>
            <Navigation>
              <a href="/">Share NOW</a>
              
            </Navigation>
              <a href='/'>Search</a>          
          </Header>
        
        <App />
        <Projects />
        <App />

        <HideableText text='testing 123'/>
        <AutoCompleteText />
        
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
        <Grid className= "projects-grid">
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

  onGet = () => {
    console.log("asdkkfjasdlf");
    return <Redirect  to='/GetItNow' />
 }

  toggleCategories() {

    if(this.state.activeTab === 0){
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
              
              <Button colored> SHARE </Button>
              <Button colored onClick={this.onGet}> GET IT NOW</Button>
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
            
            <Button colored> SHARE </Button>
            <Button colored onClick={this.onGet}> GET IT NOW </Button>
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
            
            <Button colored> SHARE </Button>
            <Button colored onClick={this.onGet}> GET IT NOW </Button>
            {/* <Link to="/GetItNow">test</Link> */}
          </CardActions>
            
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
          </Card>
        </div>
      )
    } 
  }

    render() {
      return(
        <div className="category-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => {
            this.setState({ activeTab: tabId });
            console.log(tabId);
           }} ripple>
            
            <Tab>Home</Tab>
          </Tabs>

          <Button colored onClick={this.onGet}> GET IT NOW</Button>

          {this.toggleCategories()}
          <Grid className="projects-grid">

          </Grid>
        </div>

      )


    }


}

const items = [
  {
    name: 'Toilet Paper',
  },
  {
    name: 'Rice',
  },
  {
    name:'Pet Food'
  },
];

export class App extends Component {
  constructor(props){
    super(props);
    this.state = { search: '' };
  }

  render() {
    return (
      <div>
      
      <br />
      <br />
      <br />
        <input
            type="text"
            value={this.state.search}
            onChange={(e) => {
              this.setState({
                ...this.state,
                search: e.target.value
              });
            }
          }
          />
        {
        items.filter(item => item.name.toLowerCase().includes(this.state.search.toLowerCase())).map(filteredItem => (
          <div key={filteredItem.name} >
            {filteredItem.name}
          </div>
        ))
        }
      
      
      <br />
      <br />
      
      </div>
    );
  }
}


export class HideableText extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isHidden: false,
        }
    }

    toggleIsHidden() {
        this.setState((currentState) => ({
            isHidden: !currentState.isHidden,
        }));
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggleIsHidden()}>Toggle</button>
                {!this.state.isHidden && this.props.text}
            </div>
        );
    }


}

