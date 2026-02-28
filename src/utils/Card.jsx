import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
	const { image, description, price, buttonLabel, link, previewLink } = data;

	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
			<div className="h-64 overflow-hidden">
				<img src={image} alt={description} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
			</div>

			<div className="p-5">
				<div className="mb-4">
					<p className="text-gray-800 font-semibold text-lg">{description}</p>
					<p className="text-green-600 font-bold text-xl mt-1">{price}</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-2">
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded transition-colors"
					>
						{buttonLabel}
					</a>
					{previewLink && (
						<Link to={previewLink} className="flex-1 border border-green-600 text-green-600 hover:bg-green-50 text-center py-2 px-4 rounded transition-colors text-sm">
							Preview Sample
						</Link>
					)}
				</div>
			</div>
		</div>
	);

};
import { Box, Image, Text, Button, VStack, Center, Link } from "@chakra-ui/react";


const Card = ({ data }) => {
    const { image, description, price, buttonLabel, link } = data;

    console.log('image', image)
    console.log('link', link)


    return (
        <Box bg='white' mx="40px" my="20px" borderWidth="1px" borderRadius="lg" overflow="hidden" width='300px' height='350px'>
            <Box mt='30px' display='flex' justifyContent='center'>
                <Image justifyContent='center' width='80px' src={image} alt={description} />
            </Box>

            <VStack p={4} spacing={2}>
                <Text fontWeight="semibold" align='center'>{description}</Text>
                <Text color="teal.500" fontSize="xl">
                    {price}
                </Text>
                <Center >
                    <Link href={link} isExternal>
                        <Button colorScheme="teal" mt={4}>
                            {buttonLabel}
                        </Button>
                    </Link>
                </Center>
            </VStack>
        </Box>
    );
};

export default Card;
