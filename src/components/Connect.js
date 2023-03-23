import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const serverUrl = "http://localhost:5000";

function Connect() {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [socket, setSocket] = useState(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleCreateRoomClick = async () => {
    const newSocket = io(serverUrl);
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setLocalStream(stream);
    setIsConnected(true);
    newSocket.emit("createRoom", roomName);
    newSocket.on("created", (data) => {
      console.log(`Room ${data.room} created`);
    });
    newSocket.on("joined", (data) => {
      console.log(`User ${data.socketId} joined room ${data.room}`);
    });
    newSocket.on("ready", () => {
      console.log("Socket is ready");
      newSocket.emit("stream", roomName);
    });
    newSocket.on("stream", (stream) => {
      console.log("Received remote stream");
      setRemoteStream(stream);
    });
    setSocket(newSocket);
  };

  const handleJoinRoomClick = async () => {
    const newSocket = io(serverUrl);
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setLocalStream(stream);
    setIsConnected(true);
    newSocket.emit("joinRoom", roomName);
    newSocket.on("joined", (data) => {
      console.log(`User ${data.socketId} joined room ${data.room}`);
      newSocket.emit("ready", roomName);
    });
    newSocket.on("ready", () => {
      console.log("Socket is ready");
      newSocket.emit("stream", roomName);
    });
    newSocket.on("stream", (stream) => {
      console.log("Received remote stream");
      setRemoteStream(stream);
    });
    setSocket(newSocket);
  };

  const handleDisconnectClick = () => {
    localStream.getTracks().forEach((track) => track.stop());
    socket.disconnect();
    setIsConnected(false);
    setLocalStream(null);
    setRemoteStream(null);
  };

  useEffect(() => {
    if (localStream) {
      localVideoRef.current.srcObject = localStream;
    }
  }, [localStream]);

  useEffect(() => {
    if (remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  return (
    <div>
      <div>
        <h2>Local Video:</h2>
        <video ref={localVideoRef} autoPlay playsInline muted></video>
      </div>
      <div>
        <h2>Remote Video:</h2>
        {remoteStream ? (
          <video ref={remoteVideoRef} autoPlay playsInline></video>
        ) : (
          <p>No remote stream yet.</p>
        )}
      </div>
      <div>
        {!isConnected ? (
          <div>
            <label htmlFor="roomName">Enter room name:</label>
            <input
              type="text"
              name="roomName"
              value={roomName}
              onChange={handleRoomNameChange}
            />
            <button onClick={handleCreateRoomClick}>Create Room</button>
            <button onClick={handleJoinRoomClick}>Join Room</button>
          </div>
        ) : (
          <button onClick={handleDisconnectClick}>Disconnect</button>
        )}
      </div>
    </div>
  );
}

export default Connect;
