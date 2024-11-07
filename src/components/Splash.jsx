import React, { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);

  // This useEffect will trigger on first load and hide the splash screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change 3000ms to the duration you prefer
    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
    <>
      {loading ? (
        <div className="splash-screen">
          {/* Your logo here */}
          <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
        </div>
      ) : (
        <div className="landing-page">
          {/* Your landing page components here */}
          <h1>Welcome to the landing page</h1>
        </div>
      )}
    </>
  );
};

export default App;