import React, { Component } from 'react';
import {
  Layout,
  Header,
  Navigation,
  Switch,
  Route,
  Grid,
  Cell,
  Tabs,
  Tab,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from 'react-mdl';

import Share from './SharePage';
import Profile from './ViewProfile';

export const Main = () => (
  <Switch>
    <Route path="/" component={Share} />
    <Route path="/" component={Profile} />
  </Switch>
);
//export {Main}

console.log(process.env.REACT_APP_API_ENDPOINT);

const temp_data = JSON.parse(
  '[{"product_name":"Special Ramen","image_link":"https://cdn0.woolworths.media/content/wowproductimages/medium/110285.jpg","description":"Special Ramen from the testing Gods.","quantity":1234,"units":"packs","date_created":"2020-07-10T06:52:26.889838"},{"product_name":"Special Ramen","image_link":"https://cdn0.woolworths.media/content/wowproductimages/medium/110285.jpg","description":"Special Ramen from the testing Gods.","quantity":123,"units":"packs","date_created":"2020-07-10T06:52:09.528863"},{"product_name":"Special Ramen","image_link":"https://cdn0.woolworths.media/content/wowproductimages/medium/110285.jpg","description":"Special Ramen from the testing Gods.","quantity":999,"units":"packs","date_created":"2020-07-10T06:50:46.650554"},{"product_name":"Special Ramen","image_link":"https://cdn0.woolworths.media/content/wowproductimages/medium/110285.jpg","description":"Special Ramen from the testing Gods.","quantity":999,"units":"packs","date_created":"2020-07-10T06:45:44.990960"},{"product_name":"Special Ramen","image_link":"https://cdn0.woolworths.media/content/wowproductimages/medium/110285.jpg","description":"Special Ramen from the testing Gods.","quantity":999,"units":"packs","date_created":"2020-07-10T06:15:32.136393"},{"product_name":"Special Ramen","image_link":"https://cdn0.woolworths.media/content/wowproductimages/medium/110285.jpg","description":"Special Ramen from the testing Gods.","quantity":999,"units":"packs","date_created":"2020-07-10T06:13:50.057650"},{"product_name":"Instant Ramen","image_link":"https://cdn0.woolworths.media/content/wowproductimages/medium/110285.jpg","description":"Mi goreng at its best.","quantity":1,"units":"pack","date_created":"2020-07-05T00:00:00"},{"product_name":"Toilet Paper","image_link":"https://www.bigw.com.au/medias/sys_master/images/images/h4b/h1a/14303417204766.jpg","description":"Soft, triple ply, what else could you ask for?","quantity":36,"units":"rolls","date_created":"2020-06-01T04:58:36.507109"},{"product_name":"Colgate Toothpaste","image_link":"https://www.wired.com/wp-content/uploads/archive/images/article/magazine/1510/st_colgate_f.jpg","description":"No idea how many doctors out of 10 recommend this...","quantity":6,"units":"tubes","date_created":"2020-03-20T00:00:00"},{"product_name":"Colgate Toothpaste","image_link":"https://www.wired.com/wp-content/uploads/archive/images/article/magazine/1510/st_colgate_f.jpg","description":"No idea how many doctors out of 10 recommend this...","quantity":14,"units":"tubes","date_created":"2020-03-20T00:00:00"}]'
);

console.log(temp_data);

class landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_ENDPOINT + 'product', {})
      .then((res) => {
        console.log('data updated');
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log(JSON.stringify(data));
        this.setState({
          ...this.state,
          data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="search">
        <Layout>
          <h2 className="title">Welcome to our share page!</h2>
          <div className="main-box">
            {this.state.data.length === 0 ? <div>Loading...</div> : null}

            {this.state.data.map((data, i) => (
              <ProductCard data={data} key={i} />
            ))}
          </div>
        </Layout>
      </div>
    );
  }
}

export default landing;

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card shadow={0} className="product_card">
        <CardTitle
          style={{
            height: '250px',
            background: `url(${this.props.data.image_link}) center / cover`,
          }}
        ></CardTitle>
        <CardText>
          <h4 className="cardTitle">{this.props.data.product_name}</h4>
          {this.props.data.description}
        </CardText>
        <CardActions border>
          <Button colored>Request!</Button>
        </CardActions>
      </Card>
    );
  }
}

export class Landing2 extends Component {
  render() {
    return (
      <div style={{ width: '40%', margin: 'auto' }}>
        Toilet peper
        <Grid className="landing-grid">
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
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          {/* toiletpaper 
          shadow={5} style={{minWidth: '450', margin: 'auto'}}
          */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://cdn.shopify.com/s/files/1/0012/8440/7394/products/kleenex-small-roll-toilet-tissue-kleenex-12818116640866_450x450.jpg?v=1580212623) center/cover',
              }}
            >
              Toilet Paper
            </CardTitle>

            <CardText>Toilet paper is in short now!</CardText>

            <CardActions border>
              <Button colored> Description </Button>
              <Button colored> SHARE </Button>
              <Button colored> GET IT NOW</Button>
            </CardActions>

            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Rice */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://assets.epicurious.com/photos/57d70c8ade27564257b657c6/master/pass/perfect-steamed-rice.jpg) center/cover',
              }}
            >
              Milk
            </CardTitle>

            <CardText>There are lots of milk!</CardText>

            <CardActions border>
              <Button colored> Description </Button>
              <Button colored> SHARE </Button>
              <Button colored> GET IT NOW </Button>
            </CardActions>

            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Pet Food */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://cdn0.woolworths.media/content/wowproductimages/large/480251.jpg) center/cover',
              }}
            >
              Pet Food
            </CardTitle>

            <CardText>Don't let your pets get hungry!</CardText>

            <CardActions border>
              <Button colored> Description </Button>
              <Button colored> SHARE </Button>
              <Button colored> GET IT NOW </Button>
            </CardActions>

            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <h5>Welcome to our share page!</h5>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => {
            this.setState({ activeTab: tabId });
            console.log(tabId);
          }}
          ripple
        >
          <Tab>Home</Tab>
        </Tabs>

        {this.toggleCategories()}
      </div>
    );
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
    name: 'Pet Food',
  },
];

export class App extends Component {
  constructor(props) {
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
              search: e.target.value,
            });
          }}
        />
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(this.state.search.toLowerCase())
          )
          .map((filteredItem) => (
            <div key={filteredItem.name}>{filteredItem.name}</div>
          ))}

        <br />
        <br />
      </div>
    );
  }
}
