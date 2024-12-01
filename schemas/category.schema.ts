import { z } from "zod"

export const CategoriesSchema = z.enum([
  'Characters',
  'Clans',
  'Kara',
  'Kekkeigenkai',
  'Tailed Beasts',
  'Teams',
  'Villages',
  'Akatsuki'
])

export const CharacterSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.array(z.string().url()).optional(),
  debut: z.record(z.string()).optional(),
  personal: z.record(z.string(), z.any()).optional(),
  family: z.record(z.string(), z.any()).optional(),
  jutsu: z.array(z.string()).optional(),
  natureType: z.array(z.string()).optional(),
  uniqueTraits: z.array(z.string()).optional(),
  voiceActors: z.record(z.string(), z.union([z.string(), z.array(z.string())])).optional()
})

// export const DataSchema = z.discriminatedUnion('currentPage', [
//   z.object({
//     currentPage: z.number(),
//     pageSize: z.number(),
//     totalCharacters: z.number(),
//     characters: z.array(CharacterSchema)
//   })
// ])

export const DataSchema = z.object({
  currentPage: z.number(),
  pageSize: z.number(),
  totalCharacters: z.number(),
  characters: z.array(CharacterSchema)
})