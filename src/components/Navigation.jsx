import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex maxW="container.md" mx="auto" justifyContent="space-between">
        <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
          Home
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
