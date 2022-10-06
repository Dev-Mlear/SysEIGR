import { useState } from "react";
import { Button } from "react-bootstrap";

const Record = () => {
  const [status, setStatus] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ status: status }))
    fetch('http://127.0.0.1:5000/prediction', { 
      method: 'POST',
      crossDomain: true,
      contentType: 'application/json; charset=utf-8',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ status: status }),
    }).then(() => {
      console.log('request sent');
    })
  }

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>

        <button
          type="submit"
          value="record"
          onClick={(e) => setStatus(e.target.value)}
        >
          Start Capturing
        </button>

        <button
          type="submit"
          value="stop"
          onClick={(e) => setStatus(e.target.value)}>
          Stop Capturing
        </button>

      </form>
    </div>
  );
}

export default Record;