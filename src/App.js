import React from 'react';
import './App.css';
import { SideLinks } from './components/SideLinks'
import { SearchBar } from './components/SearchBar'
import  FolderDialog from './components/FolderDialog'
 

function App() {
  
  return (
    <div>
      <SideLinks/>
      <div className="App">
        <header className="App-header">
          <h4 className="pageHeading">Slide Library</h4>
        </header>
      </div>
      
      <SearchBar/>
      <FolderDialog/>
    </div>
  );
}

export default App;
