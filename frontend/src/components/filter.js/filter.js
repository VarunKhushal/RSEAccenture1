class Filter extends React.Component {
    constructor(){
        super();
        this.state = {
          search: 'Items'
        };
    }
  
    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,
          20)});
  
    }
    render() {
      let filteredItems = this.props.items.filter(
          (item) => {
              return items.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
          }
  
      );
      return (
        <div>
            <ul>
                {filteredItems.map((items)=> {
                    return <ItemsList items={items}
                        key={items.id}/>
                })}
  
            </ul>
            <input type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}/
                    >
          
          
        </div>
      );
    }
  }
  