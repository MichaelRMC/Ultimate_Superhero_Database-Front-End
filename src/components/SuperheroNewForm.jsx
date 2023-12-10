import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Text, Button } from "@chakra-ui/react";

const API = import.meta.env.VITE_API_URL;

function SuperheroNewForm() {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [connections, setConnections] = useState("");
	const [superhero, setSuperhero] = useState({
		name: "",
		image: "",
		connections: "",
	});
	
	const httpOptions = {
		method: "POST",
		body: JSON.stringify(superhero),
		headers: {
			"Content-Type": "application/json",
		},
	};

	const addSuperhero = () => {

		fetch( `${ API }/superhero`, httpOptions )
			.then( ( response ) =>
			{
				setSuperhero( response ) 
				alert(`${superhero.name} was added to the database!`);
				navigate(`/superhero`);
			})
			.catch((error) => console.error(error));
	};
	
	const handleImageChange = (e) => {
		setImage(e.target.value);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};


	const handleConnectionsChange = (e) => {
		setConnections(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addSuperhero();
	};

	return (
		<div>
			<form className='add-superhero-form' onSubmit={handleSubmit}>
				<Text mb='8px'>Image: {image}</Text>
				<Input
					value={image}
					onChange={handleImageChange}
					placeholder='.jpeg, .png, .webp, etc.'
				/>
				<br />
				<Text mb='8px'>Superhero Name: {name}</Text>
				<Input
					value={name}
					onChange={handleNameChange}
					placeholder='Photon, Ms. Marvel, Loki, etc.'
					isInvalid
					errorBorderColor="crimson"
					isRequired
				/>
				<Text mb='8px'>Connections: {connections}</Text>
				<Input
					value={connections}
					onChange={handleConnectionsChange}
					placeholder='Avengers, Justice League, Young Avengers, Teen Titans, etc.'
				/>
				<br />
				<Button colorScheme='blue' type='submit'>
					Submit
				</Button>
			</form>
		</div>
	);
}
export default SuperheroNewForm;
