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

export const ImagesSchema = z.array(z.string().url())
export const DebutSchema = z.record(z.string()).optional()
export const FamilySchema = z.record(z.string(), z.any()).optional()
export const JutsuSchema = z.array(z.string()).optional()
export const NatureTypeSchema = z.array(z.string()).optional()
export const UniqueTraitsSchema = z.array(z.string()).optional()
export const VoiceActorsSchema =  z.record(z.string(), z.union([z.string(), z.array(z.string())])).optional()
export const ToolsSchema = z.array(z.string()).optional()
export const RankSchema = z.any().optional()
export const PersonalSchema = z.record(z.string(), z.any()).optional()

export const CharacterSchema = z.object({
  id: z.number(),
  name: z.string(),
  images: ImagesSchema,
  debut: DebutSchema,
  personal: PersonalSchema,
  family: FamilySchema,
  jutsu: JutsuSchema,
  natureType: NatureTypeSchema,
  uniqueTraits: UniqueTraitsSchema,
  voiceActors: VoiceActorsSchema
})

export const ClanSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.array(z.string().url()).optional(),
  characters: z.array(CharacterSchema)
})

export const KaraSchema = CharacterSchema.extend({
  tools: ToolsSchema,
  rank: RankSchema
})

export const DataSchema = z.union([
  z.object({
    currentPage: z.number(),
    pageSize: z.number(),
    totalCharacters: z.number(),
    characters: z.array(CharacterSchema)
  }),
  z.object({
    currentPage: z.number(),
    pageSize: z.number(),
    totalClans: z.number(),
    clans: z.array(ClanSchema)
  }),
  z.object({
    currentPage: z.number(),
    pageSize: z.number(),
    totalKara: z.number(),
    kara: z.array(KaraSchema)
  })
])