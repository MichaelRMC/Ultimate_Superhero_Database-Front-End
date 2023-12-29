import React from "react";
import { Link } from "react-router-dom";
import { Card, Center, Image, CardBody, Heading, Text } from "@chakra-ui/react";

function Superhero ( { superhero } )
{
	const {id, image, name} = superhero
	return (
		<Link to={`/superhero/${id}`}>
			<Card maxW='sm' align='center' variant='elevated' bgColor='#838B91' boxShadow='dark-lg' >
				<CardBody>
					<Heading size='md'>{id}</Heading>
					<Image src={image} alt={name} borderRadius='lg' objectFit='fill' width='240px' height='360px' />
					<Center>
					<Text>{ name }</Text>
					</Center>
				</CardBody>
			</Card>
		</Link>	
		
	);
}

export default Superhero;
