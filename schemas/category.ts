import { z } from 'zod'

export const CategoriesSchema = z.enum([
  'Characters',
  'Clans',
  'Kara',
  'Kekkeigenkai',
  'Tailed Beasts',
  'Teams',
  'Villages',
  'Akatsuki',
])

export const ImagesSchema = z.array(z.string().url())
export const DebutSchema = z.record(z.string()).optional()
export const FamilySchema = z.record(z.string(), z.any()).optional()
export const JutsuSchema = z.array(z.string()).optional()
export const NatureTypeSchema = z.array(z.string()).optional()
export const UniqueTraitsSchema = z.array(z.string()).optional()
export const VoiceActorsSchema = z
  .record(z.string(), z.union([z.string(), z.array(z.string())]))
  .optional()
export const ToolsSchema = z.array(z.string()).optional()
export const RankSchema = z.any().optional()
export const PersonalSchema = z
  .union([z.record(z.string(), z.any()), z.array(z.string())])
  .optional()

export const BasicCategorychema = z.object({
  id: z.number(),
  name: z.string(),
})
export const BasicDataSchema = z.object({
  currentPage: z.number(),
  pageSize: z.number(),
})
export const CharacterSchema = BasicCategorychema.extend({
  images: ImagesSchema,
  debut: DebutSchema,
  personal: PersonalSchema,
  family: FamilySchema,
  jutsu: JutsuSchema,
  natureType: NatureTypeSchema,
  uniqueTraits: UniqueTraitsSchema,
  voiceActors: VoiceActorsSchema,
})
export const ClanSchema = BasicCategorychema.extend({
  image: z.array(z.string().url()).optional(),
  characters: z.array(CharacterSchema),
})
export const KaraSchema = CharacterSchema.extend({
  tools: ToolsSchema,
  rank: RankSchema,
})
export const KekkeiGenkaiSchema = BasicCategorychema.extend({
  characters: z.array(CharacterSchema),
})
export const TailedBeastSchema = CharacterSchema.extend({
  voiceActors: VoiceActorsSchema,
})
export const TeamsSchema = KekkeiGenkaiSchema
export const VillagesSchema = KekkeiGenkaiSchema
export const AkatsukiSchema = CharacterSchema

export const DataSchema = z
  .union([
    BasicDataSchema.extend({
      totalCharacters: z.number(),
      characters: z.array(CharacterSchema),
    }),
    BasicDataSchema.extend({
      totalClans: z.number(),
      clans: z.array(ClanSchema),
    }),
    BasicDataSchema.extend({
      totalKara: z.number(),
      kara: z.array(KaraSchema),
    }),
    BasicDataSchema.extend({
      totalKekkeiGenkai: z.number(),
      kekkeigenkai: z.array(KekkeiGenkaiSchema),
    }),
    BasicDataSchema.extend({
      totalTailedBeasts: z.number(),
      tailedBeasts: z.array(TailedBeastSchema),
    }),
    BasicDataSchema.extend({
      totalTeams: z.number(),
      teams: z.array(TeamsSchema),
    }),
    BasicDataSchema.extend({
      totalVillages: z.number(),
      villages: z.array(VillagesSchema),
    }),
    BasicDataSchema.extend({
      totalMembers: z.number(),
      akatsuki: z.array(AkatsukiSchema),
    }),
  ])
  .nullish()

export const DataByNameSchema = z.union([
  CharacterSchema,
  ClanSchema,
  KaraSchema,
  KekkeiGenkaiSchema,
  TailedBeastSchema,
  TeamsSchema,
  VillagesSchema,
  AkatsukiSchema,
])
