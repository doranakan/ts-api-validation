import React, { useCallback } from 'react';
import { zodPokemonSchema } from '../../validation';
import DittoBox from '../DittoBox/DittoBox';

const ZodContainer = (): JSX.Element => {
  const handleResponse = useCallback(async (response: unknown) => {
    const validatedResponse = await zodPokemonSchema.safeParseAsync(response);

    if (!validatedResponse.success) {
      return { error: validatedResponse.error.toString() };
    }

    return validatedResponse.data;
  }, []);

  return <DittoBox onResponse={handleResponse} title="Zod 🚀" />;
};

export default ZodContainer;
