import React from "react";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this);
  }
    
  render() {
    console.log(this);
    return <div>Name:{this.props.name}</div>;
  }
}

export default UserProfile;
