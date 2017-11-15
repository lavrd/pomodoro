import React from 'react';


class Settings extends React.Component {

  constructor() {
    super();

    this.state = {}
  }

  componentDidMount() {

    console.log('component did mount')
  }

  render() {

    return (
      <h1 align='center'>settings page</h1>
    )
  }
}

export default Settings
