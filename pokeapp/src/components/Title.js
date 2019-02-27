import React from 'react';
export default class Title extends React.Component{
  render(){
    return (
      <div>
          <h1>{this.props.nameDeveloper}</h1>
          <h2>{this.props.profileDeveloper}</h2>
          <p><a href={this.props.linkedinProfile}>LinkedIn</a></p>
      </div>
    )
  }
}
