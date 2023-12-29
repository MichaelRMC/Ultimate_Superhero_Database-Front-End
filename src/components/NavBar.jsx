import React from "react";
import { Link } from "react-router-dom";
import { Heading, Button, Box } from "@chakra-ui/react";

function NavBar() {
	return (
		<Box as='header' bg='#a5a5ab' pt='20px' pb='100px' px='30px'>
			<Link to='/'>
				<Heading
					as='h1'
					color='#850707'
					textShadow='3px 1px #162987'
					float='left'>
					Ultimate Superhero Database
				</Heading>
			</Link>
			<Link to='/superhero/new'>
				<Button colorScheme='blue' float='right' position='sticky'>
					New Superhero
				</Button>
			</Link>
		</Box>
	);
}

export default NavBar;
