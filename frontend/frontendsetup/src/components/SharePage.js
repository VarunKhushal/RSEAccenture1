import React, { Component } from 'react';
import { Tabs, Tab} from 'react-mdl';
import label from "module";

class SharePage extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0}
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <form onSubmit={this.handleSubmit} className="inputForm">
          <br></br>
          <label>
            Name of Item:
            <input type="text" 
              value={this.state.textData} 
              name="ItemName"
              onChange={this.handleChange} />
          </label>
          <br></br>
          <br></br>
          <label>
            Quantity:
            <input type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
              />
          </label>
          <br></br>
          <br></br>
          <label>
            Condition:
            <input type="text"
              name="quantity"
              value={this.state.textData}
              onChange={this.handleChange}
              />
          </label>
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <form onSubmit={this.handleSubmit} className="inputForm">
          <br></br>
          <label>
            Enter Description:
            <input type="text" 
              value={this.state.textData} 
              name="ItemName"
              onChange={this.handleChange} />
          </label>
          <br></br>
          <br></br>
          <label>
            Insert Image:
            <input type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
              />
          </label>
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }
  
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>Donate</Tab>
          <Tab>Add Description</Tab>
        </Tabs>

        <section className="projects-grid">
          {this.toggleCategories()}
        </section>
      </div>
    );
  }
}

export default SharePage;
