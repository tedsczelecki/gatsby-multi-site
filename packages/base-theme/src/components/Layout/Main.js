import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import VStack from '../General/VStack';
import Header from '../Header/Header';
const MainLayout = ({ children }) => {
    return (React.createElement(ChakraProvider, null,
        React.createElement(VStack, { maxWidth: "1000px", p: "6", mx: "auto", width: "100%" },
            React.createElement(Header, null),
            React.createElement(Box, null, children))));
};
export default MainLayout;
