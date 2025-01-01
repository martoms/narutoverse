import { z } from 'zod'
import {
  CategoriesSchema,
  DataSchema,
  CharacterSchema,
  ClanSchema,
  KaraSchema,
  KekkeiGenkaiSchema,
  TailedBeastSchema,
  TeamsSchema,
  VillagesSchema,
  AkatsukiSchema,
} from '@/schemas/category'

export type Categories = z.infer<typeof CategoriesSchema>
export type Data = z.infer<typeof DataSchema>
export type Character = z.infer<typeof CharacterSchema>
export type Clan = z.infer<typeof ClanSchema>
export type Kara = z.infer<typeof KaraSchema>
export type KekkeiGenkai = z.infer<typeof KekkeiGenkaiSchema>
export type TailedBeast = z.infer<typeof TailedBeastSchema>
export type Team = z.infer<typeof TeamsSchema>
export type Village = z.infer<typeof VillagesSchema>
export type Akatsuki = z.infer<typeof AkatsukiSchema>
