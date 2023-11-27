import axios from "axios";
import { redirect } from "react-router-dom";

export default function AddBeerPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBeer = {
      name: e.target.name.value,
      description: e.target.description.value,
      first_brewed: e.target.first_brewed.value,
      brewers_tips: e.target.brewers_tips.value,
      attenuation_level: e.target.attenuation_level.value,
      contributed_by: e.target.contributed_by.value,
      image_url: e.target.image_url.value,
      tagline: e.target.tagline.value,
    };
    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      redirect("/beers");
    } catch (error) {
      console.log(error);
    }
  };
  //   <label htmlFor="tagline">tagline</label>
  //   <br />
  //   <input type="text" name="tagline" />
  //   <hr />
  //* Estas etiquetas faltan según los test.
  return (
    <div className="AddBeerPage">
      <h3>Agrega una nueva cerveza</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" />
        <hr />

        <label htmlFor="image_url">Url imagen</label>
        <br />
        <input type="text" name="image_url" />
        <hr />

        <label htmlFor="description">Description</label>
        <br />
        <textarea type="text" name="description" />
        <hr />

        <label htmlFor="first_brewed">First Brewed</label>
        <br />
        <input type="text" name="first_brewed" />
        <hr />

        <label htmlFor="brewers_tips">Brewer's Tips</label>
        <br />
        <input type="text" name="brewers_tips" />
        <hr />

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <br />
        <input type="number" name="attenuation_level" />
        <hr />

        <label htmlFor="contributed_by">Contributed By</label>
        <br />
        <input type="text" name="contributed_by" />
        <hr />

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}
