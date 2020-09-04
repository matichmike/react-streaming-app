import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '994333452683-agl946s09ajr28gn2dcmulu2rbad2t8a.apps.googleusercontent.com',
        scope: 'email'
      })
    })
  }

  render() {
    return (
      <div>
        GoogleAuth
      </div>
    )
  }
}

export default GoogleAuth;