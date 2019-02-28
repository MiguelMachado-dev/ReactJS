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
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui libero, venenatis et dui consequat, placerat iaculis justo. Donec nec vestibulum turpis, a vestibulum massa. Cras facilisis odio a sapien euismod maximus. Ut semper ornare ipsum, nec convallis odio interdum vitae. Proin venenatis nunc sed sollicitudin fringilla. Praesent a dapibus est. Nam at lectus eu arcu dapibus eleifend volutpat sed urna. Donec placerat metus sed nunc porta faucibus"
      },
      {
        id: 2,
        name: "Miguel Machado",
        avatar: "https://avatars3.githubusercontent.com/u/29252011?s=460&v=4",
        time: "há 30 minutos",
        body:
          "Mauris laoreet, orci eu iaculis faucibus, ex purus ornare mauris, sit amet dictum erat neque ut massa. Cras sollicitudin nisi nisl, eu consequat erat auctor eu. Cras semper elit non mauris gravida, quis dignissim mi laoreet. Nam non elit sed dolor euismod ornare et sit amet nulla. Nunc elementum dignissim orci, a bibendum orci pulvinar et. Quisque venenatis enim sit amet vestibulum molestie. Donec condimentum molestie leo feugiat hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sagittis erat pretium mi dictum vulputate. Duis mi ipsum, viverra sit amet mollis sit amet, vestibulum vel orci. Etiam suscipit vehicula risus."
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
