import React from "react";
import { Link } from "react-router-dom";
import { Heading, Button } from "@chakra-ui/react";

function NavBar() {
	return (
		<div>
			<Link to='/'>
				<Heading as='h1' color='#850707' textShadow='3px 1px #162987'>
					Ultimate Superhero Database
				</Heading>
			</Link>
			<Link to='/superhero/new'>
				<Button colorScheme='blue'>New Superhero</Button>
			</Link>
		</div>
	);
}

export default NavBar;
