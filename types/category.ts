import { z } from 'zod'
import { CategoriesSchema, DataSchema } from '@/schemas/category'

export type Categories = z.infer<typeof CategoriesSchema>
export type Data = z.infer<typeof DataSchema>