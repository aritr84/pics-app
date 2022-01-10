import React from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../api/Unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // console.log(term);

    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });

    // update the state
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onPressingSubmit={this.onSearchSubmit} />
        Found : {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
/*
NOTE - 
<SearchBar onSubmit={this.onSearchSubmit} />;

- We can give any name to onSubmit 
- It is not mandatory like in a normal jsx element <FORM onSubmit = {}> </FORM>


*/
