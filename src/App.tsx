import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './components/Logo';
import { YupContainer } from './components/YupContainer';
import { ZodContainer } from './components/ZodContainer';
import { IOTSContainer } from './components/IOTSContainer';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={2}>
          <Logo h="10vmin" pointerEvents="none" />
          <Text fontWeight="black" fontSize="5xl">
            Pokèdez
          </Text>
          <Text color="red.200" fontSize="2xl">
            DISCLAIMER 😅: This is not a real Pokèdex, it only let you get
            Ditto's info, but applying 3 different api validations! Isn't it
            beautiful?
          </Text>
          <HStack mt={8} spacing={4} alignItems={'flex-start'}>
            <YupContainer />
            <ZodContainer />
            <IOTSContainer />
          </HStack>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
