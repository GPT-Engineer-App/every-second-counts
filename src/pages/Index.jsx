import { useState, useEffect } from "react";
import { Container, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgImage="url('https://source.unsplash.com/random/1600x900')" bgSize="cover" bgPosition="center">
      <VStack spacing={4}>
        <Text as={motion.div} fontSize="4xl" fontWeight="bold" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Every Second Counts
        </Text>
        <Text as={motion.div} fontSize="2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          {formatTime(currentTime)}
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
