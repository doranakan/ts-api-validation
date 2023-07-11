import { useCallback } from 'react';
import { POKEMON_URL } from '../constants';
import { get } from '../methods/get';

const useGetPokemon = (pokemon: string) =>
  useCallback(async () => {
    const res = await get(`${POKEMON_URL}/${pokemon}`);
    return res.json();
  }, [pokemon]);

export default useGetPokemon;
