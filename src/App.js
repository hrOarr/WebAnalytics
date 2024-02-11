import './App.css';
import AnalyticsTracker from "./AnalyticsTracker";

// Now, you can send this tracking data to your server
// Example: Send trackingData to your server using fetch or AJAX
// fetch('https://your-server-endpoint.com/track', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(trackingData)
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Tracking data sent successfully:', data);
//     })
//     .catch(error => {
//         console.error('Error sending tracking data:', error);
//     });



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnalyticsTracker />
      </header>
    </div>
  );
}

export default App;
