import React from "react";
import {
	Stack,
	SimpleGrid,
	Button,
	Heading,
	VStack,
	useBreakpointValue,
	Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<SimpleGrid
			w={"full"}
			h={"100vh"}
			backgroundImage={
				"url('https://www.hollywoodreporter.com/wp-content/uploads/2016/05/140342_group_01r1-h_2016.jpg?w=3000')"
			}
			filter='auto'
			backgroundRepeat={"no-repeat"}
			backgroundSize={"initial"}
			backgroundPosition={"center"}>
			<VStack
				w={"full"}
				justify={"center"}
				px={useBreakpointValue({ base: 4, md: 8 })}>
				<Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
					<Center>
						<Heading
							as='h1'
							textShadow='3px 1px #ff0000'
							className='hero-heading'>
							Ultimate Superhero Database
						</Heading>
					</Center>
					<Stack direction={"row"}>
						<Center>
							<Button
								className='hero-button'
								shadow='dark-lg'
								bg='blue.400'
								rounded='full'
								color='black'
								_hover={{ bg: "white.500" }}>
								<Link to='/superhero'>Up, Up and Away!</Link>
							</Button>
						</Center>
					</Stack>
				</Stack>
			</VStack>
		</SimpleGrid>
	);
}

export default Hero;
