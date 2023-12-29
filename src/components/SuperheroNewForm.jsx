import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Input, Text, Button } from "@chakra-ui/react";

const API = import.meta.env.VITE_API_URL;

function SuperheroNewForm() {
	const navigate = useNavigate();
	const [superhero, setSuperhero] = useState({
		image: "",
		name: "",
		connections: "",
	});

	const httpOptions = {
		method: "POST",
		body: JSON.stringify(superhero),
		headers: {
			"Content-Type": "application/json",
		},
	};

	const addSuperhero = () =>
	{
		console.log( superhero );
		
		fetch(`${API}/superhero`, httpOptions)
			.then((response) => {
				alert(`${superhero.name} was added to the database!`);
				navigate(`/superhero`);
			})
			.catch((error) => console.error(error));
	};

	const handleImageChange = (e) => {
		setSuperhero( {...superhero, image: e.target.value} );
	};

	const handleNameChange = (e) => {
		setSuperhero({ ...superhero, name: e.target.value });
	};

	const handleConnectionsChange = (e) => {
		setSuperhero({ ...superhero, connections: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(superhero);
		addSuperhero();
	};

	return (
		<div>
			<form className='add-superhero-form' onSubmit={handleSubmit}>
				<Center>
					<Text mb='8px'>Image: {superhero.image}</Text>
				</Center>
				<Input
					value={superhero.image}
					onChange={handleImageChange}
					placeholder='.jpeg, .png, .webp, etc.'
					textAlign='center'
				/>
				<br />
				<Center>
					<Text mb='8px'>Superhero Name: {superhero.name}</Text>
				</Center>
				<Input
					value={superhero.name}
					onChange={handleNameChange}
					placeholder='Photon, Ms. Marvel, Loki, etc.'
					isInvalid
					errorBorderColor='crimson'
					isRequired
					textAlign='center'
				/>
				<Center>
					<Text mb='8px'>Connections: {superhero.connections}</Text>
				</Center>
				<Input
					value={superhero.connections}
					onChange={handleConnectionsChange}
					placeholder='Avengers, Justice League, Young Avengers, Teen Titans, etc.'
					textAlign='center'
				/>
				<br />
				<br />
				<Center>
					<Button colorScheme='blue' type='submit'>
						Submit
					</Button>
				</Center>
			</form>
		</div>
	);
}
export default SuperheroNewForm;
