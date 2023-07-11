import * as t from 'io-ts';

const IOTSPokemonSchema = t.type({
  abilities: t.array(
    t.type({
      ability: t.type({
        name: t.string,
        url: t.string,
      }),
      is_hidden: t.boolean,
      slot: t.number,
    })
  ),
  height: t.number,
  id: t.number,
  is_default: t.boolean,
  location_area_encounters: t.string,
  name: t.string,
  species: t.type({
    name: t.string,
    url: t.string,
  }),
  weight: t.number,
});

export { IOTSPokemonSchema };
