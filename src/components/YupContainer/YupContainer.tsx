import React, { useCallback } from 'react';
import { yupPokemonSchema } from '../../validation';
import DittoBox from '../DittoBox/DittoBox';
import { ValidationError } from 'yup';

const YupContainer = (): JSX.Element => {
  const handleResponse = useCallback(async (response: unknown) => {
    try {
      const validatedResponse = await yupPokemonSchema.validate(response);

      return validatedResponse;
    } catch (error) {
      return { error: (error as ValidationError).message };
    }
  }, []);

  return <DittoBox onResponse={handleResponse} title="Yup 👾" />;
};

export default YupContainer;
