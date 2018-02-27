import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import VirtualizedSelect from "react-virtualized-select";

export class SearchAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  generateLocations = location => {
    return (
      <option key={location.id} id={location.id} value={location.id}>
        {location.Name}
      </option>
    );
  };

  change = event => {
    console.log("Event Target Line 20: ", event.target)
  this.setState({id: event.target.value});
  console.log(event.target.value);
}


  render() {
    const options = [
  {label: "colorado", value:1},
  {label: "denver", value:2},
  {label: "orlando", value:3},
  {label: "miami", value:4}
]
    return (
      <div>
        <form id="search-form" onSubmit={this.props.searchAPILocations}>
        {console.log("API Search line 30: ", this.state)}
          <label htmlFor="APIWoeid">Find your location:</label>
          <VirtualizedSelect
            name="APIWoeid"
            id="APIWoeid"
            options={options}
            onChange={this.change}
            onClick={this.change}
            onKeyUp={this.change}
            onMouseLeave={this.change}
            value={this.state.id}
          />
            {this.props.woeidData.map(this.generateLocations)}
          <input type="submit" id="search-button" value="Check Location" />
        </form>
      </div>
    );
  }
}
