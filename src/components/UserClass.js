import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "User",
        public_repos: "Coimbatore",
      },
    };
    console.log("constructor");
  }

  async componentDidMount() {
    const url = await fetch("https://api.github.com/users/Ragulkumarv");
    const resp = await url.json();
    console.log(resp);
    this.setState({
      userInfo: resp,
    });

    console.log("component did mount");
  }

  componentWillUnmount() {
    console.log("component did unmount");
  }

  render() {
    console.log("return func");
    const { login, public_repos } = this.state.userInfo;
    const { stream, location } = this.props;

    return (
      <div>
        <h1>Hi !!! {login}</h1>
        <h2>Public Repos {public_repos} </h2>
        <h3>
          {stream} {location}
        </h3>
      </div>
    );
  }
}

export default UserClass;
