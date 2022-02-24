import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Form = (isEdit = false) => {
  let navi = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  let params = useParams();
  const id = params.id ? params.id : null;
  const [banana, setBanana] = useState({
    name: "",
    fiber: "",
    protein: "",
    image: "",
  });
  useEffect(() => {
    if (isEdit) {
      axios.get(`${URL}/bananas/${id}`).then((response) => {
        setBanana(response.data);
      });
    }
  }, [URL, id]);

  let handleChange = (event) => {
     setBanana({ ...banana, [event.target.id]: event.target.value });
  };

  /* put request & post request */
  let handleSubmit = (event) => {
    if (isEdit) {
      axios
        .put(`${URL}/bananas/${id}`, banana)
        .then(() => {
          navi(`/${id}`);
        })
        .catch((error) => console.warn(error));
    } else {
      axios
        .post(`${URL}/bananas/`, banana)
        .then(() => {
          navi("/");
        })
        .catch((error) => console.warn(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input
        id="name"
        name="name"
        value={banana.name}
        onChange={handleChange}
        placeholder="name"
      />
      <label for="fiber">Protein:</label>
      <input
        id="fiber"
        name="fiber"
        value={banana.fiber}
        onChange={handleChange}
        placeholder="fiber"
      />
      <label for="protein">Protein:</label>
      <input
        id="protein"
        name="protein"
        value={banana.protein}
        onChange={handleChange}
        placeholder="protein"
      />
      <label for="image">Image:</label>
      <input
        id="image"
        name="image"
        value={banana.image}
        onChange={handleChange}
        placeholder="image"
      />
    </form>
  );
};

export default Form;