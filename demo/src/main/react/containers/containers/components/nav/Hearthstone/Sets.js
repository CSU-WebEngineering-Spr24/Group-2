import React, {useEffect, useState} from 'react'
import axios from 'axios';

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
    
    return(
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
    )
}

export default Sets;
