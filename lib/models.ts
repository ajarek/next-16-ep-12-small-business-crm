import mongoose, { Model } from "mongoose"
import { IContact } from "@/types/typeContact"
import { IDeal } from "@/types/typeDeal"

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: false, min: 3, max: 100 },
    email: { type: String, required: true, unique: false, min: 3, max: 100 },
    phone: { type: String, required: true, unique: false, min: 3, max: 100 },
    company: { type: String, required: true, unique: false, min: 3, max: 100 },
    notes: { type: String, required: true, unique: false, min: 3, max: 100 },
  },
  { timestamps: true },
)

const dealSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: false, min: 3, max: 100 },
    contact: { type: String, required: true, unique: false, min: 3, max: 100 },
    value: { type: Number, required: true, unique: false },
    stage: { type: String, required: true, unique: false },
    expectedCloseDate: { type: String, required: true, unique: false },
    description: { type: String, required: true, unique: false },
  },
  { timestamps: true },
)

if (mongoose.models?.Contact) {
  delete mongoose.models.Contact
}
if (mongoose.models?.Deal) {
  delete mongoose.models.Deal
}

export const Contact: Model<IContact> = mongoose.model<IContact>(
  "Contact",
  contactSchema,
)
export const Deal: Model<IDeal> = mongoose.model<IDeal>("Deal", dealSchema)
