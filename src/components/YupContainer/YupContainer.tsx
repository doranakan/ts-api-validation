import React, { useCallback } from 'react';
import { yupPokemonSchema } from '../../validation';
import DittoBox from '../DittoBox/DittoBox';

const YupContainer = (): JSX.Element => {
  const handleResponse = useCallback(async (response: unknown) => {
    try {
      const validatedResponse = await yupPokemonSchema.validate(response);

      return validatedResponse;
    } catch (error: any) {
      return { error: error.message };
    }
  }, []);

  return <DittoBox onResponse={handleResponse} title="Yup 👾" />;
};

export default YupContainer;
