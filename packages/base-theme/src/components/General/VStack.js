import React from 'react';
import { Box } from '@chakra-ui/react';
const VStack = React.forwardRef(({ children, ...boxProps }, ref) => {
    return (React.createElement(Box, { ref: ref, alignItems: boxProps.alignItems ?? 'flex-start', display: "flex", flexDirection: "column", gap: boxProps?.gap ?? '5', width: "100%", ...boxProps }, children));
});
export default VStack;
