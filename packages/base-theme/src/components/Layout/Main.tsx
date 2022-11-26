import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import VStack from '../General/VStack';
import Header from '../Header/Header';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <ChakraProvider>
      <VStack maxWidth="1000px" p="6" mx="auto" width="100%">
        <Header />
        <Box>{children}</Box>
      </VStack>
    </ChakraProvider>
  );
};

export default MainLayout;
