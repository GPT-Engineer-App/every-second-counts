import { useState, useEffect } from "react";
import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">
          Every Second Counts
        </Text>
        <Text fontSize="2xl">{formatTime(currentTime)}</Text>
      </VStack>
    </Container>
  );
};

export default Index;
