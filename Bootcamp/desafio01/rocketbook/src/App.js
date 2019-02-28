import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Post from "./components/Post";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Miguel Machado",
        avatar: "https://avatars3.githubusercontent.com/u/29252011?s=460&v=4",
        time: "há 3 minutos",
        body: "lorem ipsum"
      },
      {
        id: 2,
        name: "Miguel Machado",
        avatar: "https://avatars3.githubusercontent.com/u/29252011?s=460&v=4",
        time: "há 30 minutos",
        body: "lorem ipsuaksdmkam"
      }
    ]
  };
  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="centerPosts">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </Fragment>
    );
  }
}

export default App;
