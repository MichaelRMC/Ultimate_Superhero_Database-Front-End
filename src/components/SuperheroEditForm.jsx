import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input, Text } from "@chakra-ui/react";

const API = import.meta.env.VITE_API_URL;

function SuperheroEditForm() {
	const { id } = useParams();
	console.log(id)
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [connections, setConnections] = useState("");
	const [superhero, setSuperhero] = useState({
		name: "",
		image: "",
		connections: "",
	} );
	
	

	const handleNameChange = ( e ) =>
	{
		console.log(e.target)
		setName({ ...superhero, [e.target.id]: e.target.value });
	};
	const handleImageChange = (e) => {
		setImage({ ...superhero, [e.target.id]: e.target.value });
	};
	const handleConnectionsChange = (e) => {
		setConnections({ ...superhero, [e.target.id]: e.target.value });
	};

	useEffect(() => {
		fetch(`${API}/superhero/${id}`)
			.then((response) => response.json())
			.then((superhero) => setSuperhero(superhero))
			.catch((error) => console.error(error));
	}, [id]);

	const httpOptions = {
		method: "PUT",
		body: JSON.stringify(superhero),
		headers: {
			"Content-Type": "application/json",
		},
	};
	const updateSuperhero = () => {
		fetch(`${API}/superhero/${id}`, httpOptions)
			.then(() => {
				alert(`${name} has been updated!`);
				navigate(`/superhero/${id}`);
			})
			.catch((error) => console.error(error));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateSuperhero();
	};
	return (
		<div>
			<form className='add-superhero-form' onSubmit={handleSubmit}>
				<Text mb='8px'>Image: {superhero.image}</Text>
				<Input
					value={superhero.image}
					onChange={handleImageChange}
					placeholder='mysite'
				/>
				<br />
				<Text mb='8px'>Superhero Name: {superhero.name}</Text>
				<Input
					value={superhero.name}
					onChange={handleNameChange}
					placeholder='Photon, Ms. Marvel, Loki, etc.'
					isInvalid
					errorBorderColor='crimson'
					isRequired
				/>
				<br />
				<Text mb='8px'>Connections: {superhero.connections}</Text>
				<Input
					value={superhero.connections}
					onChange={handleConnectionsChange}
					placeholder='Avengers, Justice League, Young Avengers, Teen Titans, etc.'
				/>
				<br />
				<Button colorScheme='blue' type='submit'>
					Submit
				</Button>
			</form>
			<Link to={`/superhero/${id}`}>
				<Button colorScheme='teal'>Back</Button>
			</Link>
		</div>
	);
}

export default SuperheroEditForm;
