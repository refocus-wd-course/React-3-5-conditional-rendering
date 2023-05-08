import React, { useState } from 'react';
import './App.css';

function App() {
  // Create a useState hook `isLoggedIn` and set the efault value to false
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {/* Using the ternary operator, conditionally render <h1>Welcome back, user!</h1> with a button `Log out; else create a button for `Log in` */}
      {/* {isLoggedIn ? (
        <div>
          <h1>Welcome back, user!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Log out</button>
        </div>
        
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      )} */}
    </div>
  );
}

export default App;
