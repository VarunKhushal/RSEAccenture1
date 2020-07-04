import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title={<Link to="/">Resource Share</Link>} scroll>
            <Navigation>
              <Link to="/SharePage">SharePage</Link>
              <Link to="/ViewProfile">ViewProfile</Link>
              <Link to="/LogInAcc">LogInAcc</Link>
              <Link to="/CreateAccount">CreateAccount</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
