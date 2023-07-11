import * as Yup from 'yup';

const yupPokemonSchema = Yup.object({
  abilities: Yup.array()
    .of(
      Yup.object({
        ability: Yup.object({
          name: Yup.string().required(),
          url: Yup.string().url().required(),
        }).required(),
        is_hidden: Yup.boolean().required(),
        slot: Yup.number(),
      }).required()
    )
    .required(),
  height: Yup.number().required(),
  id: Yup.number().required(),
  is_default: Yup.boolean().required(),
  location_area_encounters: Yup.string().url().required(),
  name: Yup.string().required(),
  species: Yup.object({
    name: Yup.string().required(),
    url: Yup.string().url().required(),
  }).required(),
  weight: Yup.number().required(),
});

export { yupPokemonSchema };
