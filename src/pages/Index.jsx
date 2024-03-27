import React from "react";
import { Box, Heading, Text, Button, Flex, Image, Stack, SimpleGrid, Container } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box backgroundImage="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBzcGFjZXxlbnwwfHx8fDE3MTE1MTQ0MjB8MA&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" height="100vh" display="flex" alignItems="center" justifyContent="center" textAlign="center" color="white">
        <Container>
          <Heading as="h1" size="2xl" mb={4}>
            Celebrating Life's Moments
          </Heading>
          <Text fontSize="xl" mb={8}>
            Our elegant event spaces provide a serene setting to honor and remember your loved ones.
          </Text>
          <Button colorScheme="white" size="lg">
            Contact Us
          </Button>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20}>
        <Container>
          <Flex alignItems="center" justifyContent="space-between">
            <Box flex={1} mr={10}>
              <Heading as="h2" size="xl" mb={4}>
                Our Story
              </Heading>
              <Text fontSize="lg" mb={6}>
                For over 50 years, we have been dedicated to providing exceptional service and creating meaningful tributes for those who have passed. Our experienced staff is committed to guiding you through every step of the process with compassion and care.
              </Text>
              <Button colorScheme="blue">Learn More</Button>
            </Box>
            <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdW5lcmFsJTIwaG9tZSUyMHN0YWZmJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzExNTE0NDIxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Funeral Home Staff" flex={1} borderRadius="md" />
          </Flex>
        </Container>
      </Box>

      {/* Services Section */}
      <Box bg="gray.100" py={20}>
        <Container>
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Services
          </Heading>
          <SimpleGrid columns={3} spacing={10}>
            <Box bg="white" p={6} borderRadius="md" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1522752622479-65eefd320386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdW5lcmFsJTIwc2VydmljZXxlbnwwfHx8fDE3MTE1MTQ0MjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Funeral Services" mb={4} mx="auto" />
              <Heading as="h3" size="lg" mb={2}>
                Funeral Services
              </Heading>
              <Text>We offer personalized funeral services to honor your loved one's life and legacy.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1509046948809-cee7c67dc810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZW1vcmlhbCUyMHNlcnZpY2V8ZW58MHx8fHwxNzExNTE0NDIxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Memorial Services" mb={4} mx="auto" />
              <Heading as="h3" size="lg" mb={2}>
                Memorial Services
              </Heading>
              <Text>Our beautiful event spaces provide a comforting setting for memorial services.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1644697701010-e17ae80d9d92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmVtYXRpb24lMjBzZXJ2aWNlfGVufDB8fHx8MTcxMTUxNDQyMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Cremation Services" mb={4} mx="auto" />
              <Heading as="h3" size="lg" mb={2}>
                Cremation Services
              </Heading>
              <Text>We offer dignified cremation services with various options for final disposition.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={20}>
        <Container>
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Contact Us
          </Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Box flex={1} mr={10}>
              <Stack spacing={4}>
                <Flex alignItems="center">
                  <FaPhone />
                  <Text ml={2}>(123) 456-7890</Text>
                </Flex>
                <Flex alignItems="center">
                  <FaEnvelope />
                  <Text ml={2}>info@elegantmemorials.com</Text>
                </Flex>
                <Flex alignItems="center">
                  <FaMapMarkerAlt />
                  <Text ml={2}>123 Main St, Anytown, USA</Text>
                </Flex>
              </Stack>
            </Box>
            <Image src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdW5lcmFsJTIwaG9tZSUyMGV4dGVyaW9yfGVufDB8fHx8MTcxMTUxNDQyMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Funeral Home Exterior" flex={1} borderRadius="md" />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
