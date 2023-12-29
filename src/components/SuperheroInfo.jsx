import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import
{

		Button,
		ButtonGroup,
		Card,
		CardBody,
		CardFooter,
		Heading,
		Stack,
		Image,
		Text,
		Table,
		Thead,
		Tbody,
		Tr,
		Th,
		Td,
		TableCaption,
		TableContainer
} from "@chakra-ui/react";

const API = import.meta.env.VITE_API_URL;
function SuperheroInfo() {
	const [ superhero, setSuperhero ] = useState( [] );

	const { id } = useParams();
	console.log( id );
	let navigate = useNavigate();

	useEffect(() => {
		fetch(`${API}/superhero/${id}`)
			.then( ( response ) => response.json())
			.then((superhero) => {
				console.log( superhero );
				setSuperhero(superhero);
			})
			.catch(() => {
				navigate("/not-found");
			});
	}, [id, navigate]);

	const httpOptions = { method: "DELETE" };

	const deleteSuperhero = () => {
		fetch(`${API}/superhero/${id}`, httpOptions)
			.then(() => {
				navigate(`/superhero`);
			})
			.catch((error) => console.error(error));
	};

	const handleDelete = () => {
		deleteSuperhero();
	};

	if (!superhero) {
		return <div>Loading...</div>;
	}

	return (
		<Card
			direction={{ base: "column", sm: "row" }}
			overflow='scroll'
			variant='elevated'
			colorScheme='#838B91'>
			<Image
				objectFit='cover'
				aspectRatio='16/9'
				src={superhero.image}
				alt={superhero.name}
				borderRadius='lg'
			/>
			<Stack>
				<CardBody textAlign='center' paddingY={4}>
					<Heading size='lg'>
						{id}
					</Heading>
					<Heading size='md'>{superhero.name}</Heading>
					<Text fontStyle='italic'>{superhero.fullname}</Text>
					<TableContainer>
						<Heading size='sm' fontWeight='700' textDecoration='underline'>Power Stats:</Heading>
						<Table variant='striped' colorScheme='cyan'>
							<Thead>
								<Tr>
									<Th>Intelligence</Th>
									<Th>Strength:</Th>
									<Th>Speed:</Th>
									<Th>Durability:</Th>
									<Th>Power:</Th>
									<Th>Combat:</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td>{superhero.intelligence}</Td>
									<Td>{superhero.strength}</Td>
									<Td>{superhero.speed}</Td>
									<Td>{superhero.durability}</Td>
									<Td>{superhero.power}</Td>
									<Td>{superhero.combat}</Td>
								</Tr>
							</Tbody>
						</Table>
					</TableContainer>
					<Text>Connections: {superhero.connections}</Text>
				</CardBody>
				<CardFooter>
					<ButtonGroup variant='solid' spacing='6'>
						<Link to={`/superhero`}>
							<Button colorScheme='teal'>Back</Button>
						</Link>
						<Link to={`/superhero/${id}/edit`}>
							<Button colorScheme='blue'>Edit</Button>
						</Link>
						<Button colorScheme='red' onClick={handleDelete}>
							Delete
						</Button>
					</ButtonGroup>
				</CardFooter>
			</Stack>
		</Card>
	);
}

export default SuperheroInfo;
