import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Code,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useGetPokemon } from '../../api';
import { useCallback, useState } from 'react';
import {
  IOTSPokemonSchema,
  yupPokemonSchema,
  zodPokemonSchema,
} from '../../validation';
import * as Yup from 'yup';
import * as z from 'zod';
import * as t from 'io-ts';

type Ditto =
  | Yup.InferType<typeof yupPokemonSchema>
  | z.infer<typeof zodPokemonSchema>
  | t.TypeOf<typeof IOTSPokemonSchema>;

interface DittoBoxProps {
  onResponse: (response: unknown) => Promise<Ditto | { error: string }>;
  title: string;
}

const DittoBox = ({ onResponse, title }: DittoBoxProps): JSX.Element => {
  const [ditto, setDitto] = useState<Ditto | undefined>();
  const [error, setError] = useState('');

  const getDitto = useGetPokemon('ditto');

  const handleClick = useCallback(async () => {
    const response = await getDitto();

    const validatedResponse = await onResponse(response);

    if ('error' in validatedResponse) {
      setDitto(undefined);
      setError(validatedResponse.error);

      return;
    }

    setError('');
    setDitto(validatedResponse);
  }, [getDitto, onResponse]);

  return (
    <Box borderColor="red.50" borderRadius={8} borderWidth={1} flex={1} p={8}>
      <VStack>
        <Text fontWeight="black" fontSize="1xl">
          {title}
        </Text>
        <Button backgroundColor="red.600" onClick={handleClick}>
          GET Ditto
        </Button>
        {!!ditto && (
          <>
            <Alert status="success">
              <AlertIcon />
              Ditto!
            </Alert>
            <Code fontSize={8}>{JSON.stringify(ditto, null, 10)}</Code>
          </>
        )}
        {!!error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Validation error</AlertTitle>
            <AlertDescription>{JSON.stringify(error)}</AlertDescription>
          </Alert>
        )}
      </VStack>
    </Box>
  );
};

export default DittoBox;
