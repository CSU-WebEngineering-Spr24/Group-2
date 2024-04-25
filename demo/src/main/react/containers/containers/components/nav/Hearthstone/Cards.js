import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Cards = () =>{
  const [cards, setCard] = useState();
  const [cardArray, setCardArray] = useState([]);
  const [cardName, setCardName] = useState();
  const fetchCard = (() => {
      const apiCall = `/api/card/${cardName}`
      axios.get(apiCall)
        .then(function (response){
          setCard(response.data);
          console.log(response);
        })
        .catch(function (error){
          console.log(error)
          fetchCardSearch(cardName);
        })
  })
  const fetchCardSearch = (() => {
    const apiCallArray = `/api/search/${cardName}`
    axios.get(apiCallArray)
      .then(function (response){
        setCardArray(response.data)
        console.log(response);
      })
      .catch(function (error){
        console.log(error);
      })
  })
    return(
    <>
      <div>
        <input type= "text" value = {cardName} onChange={(e) => setCardName(e.target.value)} placeholder='Enter Card Name or ID' />
        <button type = "button" class = "btn btn-primary" onClick={() => fetchCard()}> Search </button>
      </div>
      <div>
              <div className="card-container" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
              {cards?.map(card => (
                <div className="card" key={card.cardId} style={{ width: "18rem", margin: "2%" }}>
                  {card.img && <LazyLoadImage className="card-img-top" src={card.img} alt={card.name} height={250} />}
                  <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <p><strong>Type:</strong> {card.type}&nbsp;&nbsp;<strong>Class:</strong> {card.playerClass}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="card-container" style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
              {cardArray?.map(card2 => (
                <div className="card" key={card2.cardId} style={{ width: "18rem", margin: "2%" }}>
                  {card2.img && <LazyLoadImage className="card-img-top" src={card2.img} alt={card2.name} height={250} />}
                  <div className="card-body">
                    <h5 className="card-title">{card2.name}</h5>
                    <p><strong>Type:</strong> {card2.type}&nbsp;&nbsp;<strong>Class:</strong> {card2.playerClass}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </>

    )
}
export default Cards