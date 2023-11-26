import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BeerDetails() {
  const { beerId } = useParams();
  console.log(beerId);
  const [oneBeer, setOneBeer] = useState([]);
  const endPoint = "https://ih-beers-api2.herokuapp.com/beers/"; //+beerId

  const renderBeer = async () => {
    let prompt = beerId || "random";
    try {
      const beer = await axios.get(endPoint + prompt);
      setOneBeer(beer.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    renderBeer();
  }, []);

  return (
    <div>
      <img src={oneBeer.image_url} alt="cerveza" />
      <h3>{oneBeer.name}</h3>
      <p>{oneBeer.tagline}</p>
      <p>{oneBeer.first_brewed}</p>
      <p>{oneBeer.attenuation_level}</p>
      <p>{oneBeer.description}</p>
      <p>{oneBeer.contributed_by}</p>
    </div>
  );
}
