import React, { useState } from 'react';
import './index.css'; // Import CSS for styling

const HomePage = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Toggle panel function
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="homepage-container">
      {/* Background image */}
      <div className="background-image"></div>

      {/* Sliding panel */}
      <div className={`sliding-panel ${isPanelOpen ? 'open' : ''}`}>
        <button className="toggle-button" onClick={togglePanel}>
          Toggle Panel
        </button>

        {/* Panel content */}
        {isPanelOpen && (
          <div className="panel-content">
            <h2>Panel Content</h2>
            <p>This is the content inside the sliding panel.</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

