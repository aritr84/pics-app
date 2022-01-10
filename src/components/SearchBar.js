import React from "react";

// using class based components

class SearchBar extends React.Component {
  //   onInputChange(event) {
  //     console.log(event.target.value);

  //   }

  constructor(props) {
    super(props);
    // this is how we use bind function method in JS classes.
    // method 1 -
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  state = { term: "" };

  onFormSubmit(event) {
    event.preventDefault(); //to prevent the default property of HTML element
    // console.log(this.state.term);
    // error - cannot read state
    // this keyword by default points to undefined.
    this.props.onPressingSubmit(this.state.term);
  }

  // method 2 -
  // solving it using arrow functions -
  // arrow functions automaticaly bind "this" with the instance/object.
  //   onFormSubmit = (event) => {
  //     event.preventDefault();

  //     console.log(this.state.term);
  //   };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
