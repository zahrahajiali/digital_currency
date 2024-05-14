import { useEffect, useState } from "react";
import { connectAndReconnect } from "@/services/webSocketService";

const CryptoPrices = () => {
  const [coinList, setCoinList] = useState({});
  useEffect(() => {
    const socketUrl = "wss://ws.coincap.io/prices?assets=ALL";

    const successCallback = () => {
      console.log("WebSocket connected");
    };

    const ws = connectAndReconnect(socketUrl, successCallback);
    let list = {};
    ws.onmessage = (event) => {
      console.log("event", event); // Handle the received data (e.g., update state with prices)
      const data = JSON.parse(event.data);
      console.log("data", data);
      list = { ...list, ...data };
      setCoinList(list);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <div>{Object.keys(coinList).length}</div>

      {Object.keys(coinList).map((item) => (
        <div className="flex gap-4">
          <span>{item}:</span>
          <span>{coinList[item]}</span>
        </div>
      ))}
    </div>
  );
};

export default CryptoPrices;
