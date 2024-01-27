import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Center, Button, Input, Text } from "@chakra-ui/react";

const API = import.meta.env.VITE_API_URL;

function SuperheroEditForm() {
	const { id } = useParams();
	console.log(id);
	const navigate = useNavigate();
	const [superhero, setSuperhero] = useState({
		name: "",
		image: "",
		connections: "",
	});

	const handleImageChange = (e) => {
		console.log(e.target);
		setSuperhero({ ...superhero, image: e.target.value });

	};
	const handleNameChange = (e) => {
			setSuperhero({ ...superhero, name: e.target.value });
		};
	const handleConnectionsChange = (e) => {
		setSuperhero({ ...superhero, connections: e.target.value });
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
				navigate(`${API}/superhero/${id}`);
			})
			.catch((error) => console.error(error));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateSuperhero();
	};
	return (
		<div>
			<form className='edit-superhero-form' onSubmit={handleSubmit}>
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
				<br />
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
			<Center>
				<Link to={`/superhero/${id}`}>
					<Button colorScheme='teal'>Back</Button>
				</Link>
			</Center>
		</div>
	);
}

export default SuperheroEditForm;
