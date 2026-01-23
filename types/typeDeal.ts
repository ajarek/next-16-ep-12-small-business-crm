import { Document } from "mongoose"

export interface IDeal extends Document {
  title: string
  contact: string
  value: number
  stage: string
  expectedCloseDate: string
  description: string
}

export type DealFormData = {
  title: string
  contact: string
  value: number
  stage: string
  expectedCloseDate: string
  description: string
}
