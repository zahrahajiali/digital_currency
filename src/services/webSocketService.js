import webstomp from "webstomp-client";

export const connectAndReconnect = (socketUrl, successCallback) => {
  let ws = new WebSocket(socketUrl);
  let client = webstomp.over(ws);

  const connectWebSocket = () => {
    client.connect(
      {},
      (frame) => {
        successCallback();
      },
      () => {
        console.log("WebSocket disconnected. Reconnecting in 3 seconds...");
        setTimeout(() => {
          connectWebSocket();
        }, 3000);
      }
    );
  };

  connectWebSocket();

  return ws;
};
