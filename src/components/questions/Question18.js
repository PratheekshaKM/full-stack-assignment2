import React from 'react';

function Question18() {
  return (
    <div className="question-answer">
      <p>
        Here's how to make a component that displays the current date and time and updates every second using useEffect:
      </p>
      
      <pre>
        <code className="language-jsx">
{`import React, { useState, useEffect } from 'react';

function Clock() {
  const [dateTime, setDateTime] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  const formatDate = (date) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString(undefined, options);
  };
  
  const formatTime = (date) => {
    const options = { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    };
    return date.toLocaleTimeString(undefined, options);
  };
  
  return (
    <div className="clock-container">
      <h2>Current Date and Time</h2>
      
      <div className="clock-display">
        <div className="date-display">
          <p className="date-label">Date:</p>
          <p className="date-value">{formatDate(dateTime)}</p>
        </div>
        
        <div className="time-display">
          <p className="time-label">Time:</p>
          <p className="time-value">{formatTime(dateTime)}</p>
        </div>
      </div>
      
      <p className="clock-info">
        This clock updates every second using React's useEffect hook.
      </p>
    </div>
  );
}

export default Clock;`}
        </code>
      </pre>
      
      <p>
        This component creates a live clock that updates every second:
      </p>
      
      <ul>
        <li>It uses <code>useState</code> to store the current date and time.</li>
        <li>It uses <code>useEffect</code> to set up an interval that updates the time every second.</li>
        <li>The cleanup function in <code>useEffect</code> clears the interval when the component unmounts, preventing memory leaks.</li>
        <li>It formats the date and time using JavaScript's <code>toLocaleDateString</code> and <code>toLocaleTimeString</code> methods.</li>
        <li>The component displays both the date and time in a readable format.</li>
      </ul>
      
      <p>
        This is a practical example of using <code>useEffect</code> for setting up and cleaning up side effects like timers. 
        The empty dependency array ensures that the effect only runs once when the component mounts, but the interval 
        continues to update the state every second.
      </p>
    </div>
  );
}

export default Question18;
