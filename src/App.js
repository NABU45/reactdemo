import { useState } from 'react';
import './Card.css';
import Card from './components/Card';

function App() {
  const [incidentNumber, setIncidentNumber] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const [cardList, setCardList] = useState([
    {
      incidentNumber: "INC0021001",
      title: "Please remove item 1 from my computer",
      time: "2023-10-09",
      priority: "3- Low",
      status: "on_hold",
    },
    {
      incidentNumber: "INC0021002",
      title: "Please remove item 2 from my computer",
      time: "2023-10-09",
      priority: "3- Low",
      status: "in_progress",
    },
  ]);

  const handleCardAdd = () => {
    const newCard = {
      incidentNumber,
      title,
      time,
      priority,
      status,
    };
    setCardList([...cardList, newCard]);

    setIncidentNumber("");
    setTitle("");
    setTime("");
    setPriority("");
    setStatus("");
  };

  const handleIncidentNumberChange = (e) => {
    setIncidentNumber(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleCardDelete = (cardId) => {
    const newCardList = cardList.filter(card => card.incidentNumber !== cardId);
    setCardList(newCardList);
  };

  return (
    <>
      <div>
        <div>Incident Number: {incidentNumber}</div>
        <div>Title: {title}</div>
        <div>Time: {time}</div>
        <div>Priority: {priority}</div>
        <div>Status: {status}</div>
      </div>
      <div className="App">
        <span>Incident Number</span>
        <input onChange={handleIncidentNumberChange} value={incidentNumber}></input>
        <br />
        <span>Title</span>
        <input onChange={handleTitleChange} value={title}></input>
        <br />
        <span>Time</span>
        <input onChange={handleTimeChange} value={time}></input>
        <br />
        <span>Priority</span>
        <input onChange={handlePriorityChange} value={priority}></input>
        <br />
        <span>Status</span>
        <input onChange={handleStatusChange} value={status}></input>
        <br />
        <button onClick={handleCardAdd}>Add New Card</button>
        {
          cardList.map(card => (
            <Card
              key={card.incidentNumber}
              incidentNumber={card.incidentNumber}
              title={card.title}
              time={card.time}
              priority={card.priority}
              status={card.status}
              deleteHandler={handleCardDelete}
            />
          ))
        }
      </div>
    </>
  );
}

export default App;
