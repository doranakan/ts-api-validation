import React, { useCallback } from 'react';
import { zodPokemonSchema } from '../../validation';
import DittoBox from '../DittoBox/DittoBox';

const ZodContainer = (): JSX.Element => {
  const handleResponse = useCallback(async (response: unknown) => {
    try {
      const validatedResponse = await zodPokemonSchema.parseAsync(response);

      return validatedResponse;
    } catch (error: any) {
      return { error: error.message };
    }
  }, []);

  return <DittoBox onResponse={handleResponse} title="Zod 🚀" />;
};

export default ZodContainer;
