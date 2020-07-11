import React, { Component } from 'react';
import { Tabs, Tab, Textfield, Button, DataTable, TableHeader, Switch, Grid, Cell} from 'react-mdl';

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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Textfield
            onChange={() => {}}
            label="Name of Item..."
            floatingLabel
            style={{width: '300px'}}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Textfield
            onChange={() => {}}
            label="Enter Description"
            floatingLabel
            style={{width: '400px'}}
        />
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Textfield
            onChange={() => {}}
            pattern="-?[0-9]*(\.[0-9]+)?"
            error="Input is not a number!"
            label="Quantity"
            style={{width: '300px'}}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Textfield
            onChange={() => {}}
            label="Insert Image..."
            floatingLabel
            style={{width: '400px'}}
        />
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <DataTable
            selectable
            shadow={0}
            rowKeyColumn="id"
            rows={[
                {id: 1001, Category: 'Health and Beauty'},
                {id: 1002, Category: 'Clothing'},
                {id: 1003, Category: 'Food Supplies'},
                {id: 1004, Category: 'Pet Supplies'},
                {id: 1005, Category: 'Electronics'},
                {id: 1006, Category: 'Entertainment'},
                {id: 1007, Category: 'Baby Needs'}
            ]}
        >
            <TableHeader name="Category" tooltip="The category name">Category</TableHeader>
        </DataTable>
        <br></br>
        <br></br>
        <Switch ripple id="switch1" defaultChecked>Exchanging Item?</Switch>
        <br></br>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button raised accent ripple onclick="http://localhost:3000">Submit</Button>
        <br></br>
        <br></br>
      </form>
    )
  } else if (this.state.activeTab === 1) {
    return (
      <form onSubmit={this.handleSubmit} className="inputForm">
        <br></br>
          <div style={{width: '80%', margin: 'auto'}}>
            <Grid className="demo-grid-ruler">
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
                <Cell col={1}>1</Cell>
            </Grid>
            <Grid className="demo-grid-1">
                <Cell col={4}>4</Cell>
                <Cell col={4}>4</Cell>
                <Cell col={4}>4</Cell>
            </Grid>
            <Grid className="demo-grid-2">
                <Cell col={6}>6</Cell>
                <Cell col={4}>4</Cell>
                <Cell col={2}>2</Cell>
            </Grid>
            <Grid className="demo-grid-3">
                <Cell col={6} tablet={8}>6 (8 tablet)</Cell>
                <Cell col={4} tablet={6}>4 (6 tablet)</Cell>
                <Cell col={2} phone={4}>2 (4 phone)</Cell>
            </Grid>
          </div>
        <Button raised accent ripple>Exchange</Button>
      </form>
    )
  }
}
  
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>Donate</Tab>
          <Tab>Exchange</Tab>
        </Tabs>

        <section className="projects-grid">
          {this.toggleCategories()}
        </section>
      </div>
    );
  }
}

export default SharePage;
