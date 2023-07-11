import React, { useCallback } from 'react';
import { IOTSPokemonSchema } from '../../validation';
import DittoBox from '../DittoBox/DittoBox';
import { isLeft } from 'fp-ts/lib/Either';
import { PathReporter } from 'io-ts/PathReporter';
import * as t from 'io-ts';

const IOTSContainer = (): JSX.Element => {
  const handleResponse = useCallback(async (response: unknown) => {
    const validatedResponse = IOTSPokemonSchema.decode(response);

    if (isLeft(validatedResponse)) {
      return { error: PathReporter.report(validatedResponse).join('\n') };
    }

    return validatedResponse.right;
  }, []);

  return <DittoBox onResponse={handleResponse} title="IO-TS 😳" />;
};

export default IOTSContainer;
