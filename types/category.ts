import { z } from 'zod'
import { CategoriesSchema } from '@/schemas/category.schema'

export type Categories = z.infer<typeof CategoriesSchema>