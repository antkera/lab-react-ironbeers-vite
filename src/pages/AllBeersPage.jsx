import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllBeersPage() {
    const [q, setq] = useState("")
  const endPoint = "https://ih-beers-api2.herokuapp.com/beers/"; //+id

  const handleSearch = ({target: {value}}) => {
    setq(value)
    
    console.log(value)
  };

  const [beers, setBeers] = useState([]);
 
 
  const deployBeers = async () => {
    try {
        console.log("desplegando cervezas")
      const response = await axios.get(
        q? `https://ih-beers-api2.herokuapp.com/beers/search?q=${q}`
        : "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }

  };
  useEffect(() => {
    deployBeers();
  }, [q]);

  return (
    <div>
      <h1>All beers</h1>

      <label htmlFor="q">Search</label>
      <br />
      <input onChange={handleSearch} type="text" name="q" />
      <hr />

      {beers.map(({ image_url, name, contributed_by, tagline, _id }) => {
        return (
          <Link key={_id} to={"/beers/" + _id}>
            <div>
              <img src={image_url} alt="cerveza" />
              <p>
                <strong>Name:</strong>
                {name}
              </p>
              <p>
                <strong>Tagline:</strong>
                {tagline}
              </p>
              <p>
                <strong>Contributed by:</strong>
                {contributed_by}
              </p>
              <hr />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
