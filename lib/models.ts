import mongoose from "mongoose"

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

export const Contact = mongoose.model("Contact", contactSchema)
export const Deal = mongoose.model("Deal", dealSchema)
