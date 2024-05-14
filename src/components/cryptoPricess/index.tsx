import { useEffect } from "react";

const CryptoPrices = () => {
  useEffect(() => {
    let ws = new WebSocket("wss://ws.coincap.io/prices?assets=ALL");

    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      //   const data = JSON.parse(event.data);
      console.log("event", event);
      // Handle the received data (e.g., update state with prices)
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected. Reconnecting in 3 seconds...");
      setTimeout(() => {
        ws = new WebSocket("wss://ws.coincap.io/prices?assets=ALL");
      }, 3000);
    };

    return () => {
      ws.close();
    };
  }, []);

  return <div>Crypto Prices</div>;
};

export default CryptoPrices;
