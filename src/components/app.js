import React from "react";
import SearchBar from "./searchBar.js";
import unsplash from "../api/unsplash";
import ImageList from "./imageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const Response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: Response.data.results });
    // fetch(
    //   "https://api.unsplash.com/search/photos?client_id=&page=1&query=office"
    // ).then(
    //   result => {
    //     console.log(result);
    //     this.setState({
    //       images: result.images
    //     });
    //   },
    //   error => {}
    // );
  };

  render() {
    return (
      <div>
        <SearchBar submitCall={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
