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
          <Header title={<Link to="/">Releaf</Link>} scroll>
            <Navigation>
              <Link to="/SharePage">Share</Link>
              <Link to="/ViewProfile">Profile</Link>
              <Link to="/LogInAcc">Log in</Link>
              <Link to="/CreateAccount">Create Account</Link>
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
