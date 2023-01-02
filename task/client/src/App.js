// import { useFetch } from './hooks/hooks'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  // useFetch("/")

  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/post";
			const { data: res } = await axios.post(url, data);
			navigate("/");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	// <{name: string, price: number, imgUrl: string }>
	const [data, setData] = useState( {
		name: "",
		price: "",
		imgUrl: "",
		id: "",
	});

	const [error, setError] = useState("");
	const navigate = useNavigate();
	/*
		handleChange is a function that makes use of useState to watch over the input value
		 of the form inputs and send the new value to the server using axios post request
	*/
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  return ( 
    <>
    <h1>Home Page, Very Cool, Such Style</h1>
  <form onSubmit={handleSubmit}>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={handleChange}/>
    <label class="form-check-label" for="exampleCheck1">Unemployed</label>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={handleChange}/>
    <label class="form-check-label" for="exampleCheck1">Employed</label>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" onChange={handleChange}/>
  </div>      
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEID" class="form-label">Employee ID</label>
    <input type="EID" class="form-control" id="exampleInputEID" onChange={handleChange}/>
  </div>
    {/* select */}
  <select class="form-select" aria-label="Default select example" onChange={handleChange}>
    <option selected>Department</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <br></br>
  <div class="mb-3">
    <label for="formFileMultiple" class="form-label">Multiple files input example</label>
    <input class="form-control" type="file" id="formFileMultiple" multiple onChange={handleChange}/>
  </div>

  {error && <div className={error}>{error}</div>}
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </>
   );
}

export default App;