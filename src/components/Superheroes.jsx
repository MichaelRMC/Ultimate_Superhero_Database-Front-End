import React, { useState, useEffect } from "react";
import { SimpleGrid, Stack } from "@chakra-ui/react";
import Superhero from "../components/Superhero";

const API = import.meta.env.VITE_API_URL;

function Superheroes() {
const [superheroes, setSuperheroes] = useState(null);
	useEffect(() => {
		fetch(`${API}/superhero`)
			.then((response) => response.json())
			.then((superheroes) => {
				console.log(superheroes)
				setSuperheroes(superheroes)
			})
			.catch((error) => console.error(error))
	}, []);

	return (
		<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
			<Stack>
				{superheroes?.map((superhero, id) => {
					return <Superhero key={id} superhero={superhero} id={id} />;
				})}
			</Stack>
		</SimpleGrid>
	);
}

export default Superheroes;
