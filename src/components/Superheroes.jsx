import React, { useState, useEffect } from "react";
import { SimpleGrid, Stack } from "@chakra-ui/react";
import Superhero from "../Components/Superhero";

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
		<SimpleGrid height='100%'  templateRows='(repeat(auto-fi, 1fr))' templateColumns='repeat(4, 0.25fr)'>
		{superheroes?.map((superhero, id) => {
					return <Superhero key={id} superhero={superhero} id={id} />;
				})}
		</SimpleGrid>
	);
}

export default Superheroes;
