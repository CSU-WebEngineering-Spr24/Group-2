import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Sets = () => {
  const [sets, setSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchSets = async () => {
      try {
        const response = await axios.get('/api/info');
        setSets(response.data.sets);
      } catch (error) {
        console.error('Error fetching sets:', error);
      }
    };

    fetchSets();
  }, []);

  const handleSetChange = (event) => {
    setSelectedSet(event.target.value);
  };

  const fetchCardsInSet = async () => {
    if (!selectedSet) return;
    try {
      const response = await axios.get(`/api/set/${selectedSet}`);
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards in set:', error);
      setCards([]);
    }
  };

  useEffect(() => {
    fetchCardsInSet();
  }, [selectedSet]);

  return (
    <div>
      
      <select style={{ margin: "2%", fontSize: "20px", padding: "1%" }} value={selectedSet} onChange={handleSetChange}>
        <option value="">Select a Set</option>
        {sets.map((set, index) => (
          <option key={index} value={set}>
            {set}
          </option>
        ))}
      </select>
      <br />
      <div class = "hidden" style={{backgroundImage: `url(${'./image.png'})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      overflow: 'hidden'}}>
      <div className="card-container" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        {cards.map(card => (
          <div className="card" key={card.cardId} style={{ width: "18rem", margin: "2%" }}>
            {card.img && <LazyLoadImage className="card-img-top" src={card.img} alt={card.name} height={250} />}
            <div className="card-body">
              <h5 className="card-title">{card.name}</h5>
              <p><strong>Type:</strong> {card.type}&nbsp;&nbsp;<strong>Class:</strong> {card.playerClass}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{backgroundImage: `url(${'./background.png'})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%"}}>
      </div>
    </div>
    </div>
  );
};

export default Sets;
