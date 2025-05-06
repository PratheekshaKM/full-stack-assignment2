import React from 'react';

function Question2() {
  return (
    <div className="question-answer">
      <p>
        React Hooks allow function components to use state and lifecycle features that were previously 
        only available in class components.
      </p>
      
      <h3>Example of useState:</h3>
      <pre>
        <code className="language-jsx">
{`function NameDisplay() {
  const [name, setName] = React.useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}`}
        </code>
      </pre>
      
      <h3>Example of useEffect:</h3>
      <pre>
        <code className="language-jsx">
{`function Timer() {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return <p>Seconds: {seconds}</p>;
}`}
        </code>
      </pre>
    </div>
  );
}

export default Question2;
