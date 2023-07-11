import { z } from 'zod';

const zodPokemonSchema = z.object({
  abilities: z.array(
    z.object({
      ability: z.object({ name: z.string(), url: z.string().url() }),
      is_hidden: z.boolean(),
      slot: z.number(),
    })
  ),
  height: z.number(),
  id: z.number(),
  is_default: z.boolean(),
  location_area_encounters: z.string().url(),
  name: z.string(),
  species: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  weight: z.number(),
});

export { zodPokemonSchema };
