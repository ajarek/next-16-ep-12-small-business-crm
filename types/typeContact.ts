import { Document } from "mongoose"

export interface IContact extends Document {
  name: string
  email: string
  phone: string
  company: string
  notes: string
}

export type ContactFormData = {
  name: string
  email: string
  phone: string
  company: string
  notes: string
}
