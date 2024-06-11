import { Container, Box, Heading, Text, VStack, HStack, Divider, Image } from "@chakra-ui/react";
import { FaFire } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        {/* Main Headline Section */}
        <Box w="full" bg="gray.100" p={4} borderRadius="md">
          <Heading as="h1" size="2xl" mb={4}>
            Main Headline Title
          </Heading>
          <Text fontSize="lg">This is a brief description of the main headline. It should be compelling and informative to capture the reader's attention.</Text>
        </Box>
        
        <Divider />

        {/* Subsections */}
        <HStack spacing={4} align="start" w="full">
          <VStack flex={3} spacing={4}>
            <Section title="World" />
            <Section title="Business" />
            <Section title="Technology" />
          </VStack>
          
          {/* Sidebar for Popular Articles */}
          <VStack flex={1} spacing={4} align="start" w="full" bg="gray.50" p={4} borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>
              Trending Topics <FaFire color="red" />
            </Heading>
            <TrendingArticle title="Popular Article 1" />
            <TrendingArticle title="Popular Article 2" />
            <TrendingArticle title="Popular Article 3" />
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

const Section = ({ title }) => (
  <Box w="full" p={4} bg="white" borderRadius="md" boxShadow="sm">
    <Heading as="h2" size="lg" mb={2}>
      {title}
    </Heading>
    <VStack spacing={2} align="start">
      <Article title={`${title} Article 1`} />
      <Article title={`${title} Article 2`} />
      <Article title={`${title} Article 3`} />
    </VStack>
  </Box>
);

const Article = ({ title }) => (
  <Box>
    <Heading as="h3" size="md">
      {title}
    </Heading>
    <Text fontSize="sm">A brief summary of the article goes here. It gives a quick overview of the content.</Text>
  </Box>
);

const TrendingArticle = ({ title }) => (
  <Box>
    <Heading as="h4" size="md">
      {title}
    </Heading>
  </Box>
);

export default Index;