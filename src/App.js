import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [qrCodeUrl, setQRCodeUrl] = useState("");

  useEffect(() => {
    const fetchQRCode = async () => {
      const response = await fetch("http://localhost:3000/movies/generate-qr");
      const data = await response.text();
      setQRCodeUrl(data);
    };
    fetchQRCode();

    const interval = setInterval(() => {
      fetchQRCode();
    }, 10000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="App">
      {qrCodeUrl && <img src={qrCodeUrl} alt='QR COde' />}
    </div>
  );
}

export default App;
