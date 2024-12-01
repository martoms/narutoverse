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