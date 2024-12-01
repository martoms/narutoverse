import { z } from 'zod'
import { CategoriesSchema, DataSchema } from '@/schemas/category.schema'

export type Categories = z.infer<typeof CategoriesSchema>
export type Data = z.infer<typeof DataSchema>