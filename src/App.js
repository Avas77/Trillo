import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="container">
      <header className="header">
        Header part
      </header>
      <div className="content">
        <nav className="sidebar">
          Sidebar part
        </nav>
        <main className="desription">
          Description part
        </main>
      </div>
    </div>
  );
}

export default App;
