import React from 'react';
import './SideLinks.css';

export class SideLinks extends React.Component {
  render() {
    return (
        <div className="sideLinks">
          <header className="App-header">
             <a href="https://www.w3schools.com" className="sideLink1">Upload your slides</a>
             <a href="https://www.w3schools.com" className="sideLink2">User Guid</a>
          </header>
        </div>
      );
  }
}

export default SideLinks;
