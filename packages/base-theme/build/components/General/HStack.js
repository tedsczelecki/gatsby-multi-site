import React from 'react';
import { Box } from '@chakra-ui/react';
const VStack = ({ children, gap = '5', ...boxProps }) => {
    return (React.createElement(Box, { alignItems: boxProps?.alignItems ?? 'flex-start', display: "flex", flexDirection: boxProps?.flexDirection ?? 'row', gap: gap, width: "100%", ...boxProps }, children));
};
export default VStack;
