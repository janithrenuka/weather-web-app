import React from 'react';
const api = {
  key: "131d010ff60702f8813bffcd08cb95bd",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search..." 
          />
        </div>
        <div className="location-box">
          <div className="location"></div>
          <div className="date"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
