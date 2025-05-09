/* iPhone Frame Styles */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.iphone-frame {
  width: 280px;
  height: 600px;
  background-color: black;
  border-radius: 48px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.iphone-status-bar {
  height: 24px;
  background-color: black;
  color: white;
  font-size: 12px;
  padding: 4px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}

.iphone-screen {
  flex: 1;
  background-color: white;
  border-radius: 32px 32px 48px 48px;
  padding: 20px;
  text-align: center;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.iphone-home-bar {
  height: 24px;
  width: 130px;
  margin: 8px auto;
  background-color: #ccc;
  border-radius: 12px;
}

/* UI Styling */
h1 {
  font-size: 18px;
  margin-top: 12px;
}

button {
  margin: 10px 0;
  padding: 10px 16px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  background-color: #00b894;
  color: white;
  cursor: pointer;
  width: 100%;
}

select {
  padding: 6px;
  font-size: 14px;
  margin: 10px 0;
  width: 100%;
  border-radius: 6px;
}

video {
  width: 100%;
  margin-top: 10px;
  border-radius: 12px;
}
