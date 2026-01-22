import mongoose from "mongoose"



const contactSchema = new mongoose.Schema(
  {name: { type: String, required: true, unique: false, min: 3, max: 100 },
    email: { type: String, required: true, unique: false, min: 3, max: 100 },
    phone: { type: String, required: true, unique: false, min: 3, max: 100 },
    company: { type: String, required: true, unique: false, min: 3, max: 100 },
    notes: { type: String, required: true, unique: false, min: 3, max: 100 },
  },
  { timestamps: true },
)

if (mongoose.models?.Contact) {
  delete mongoose.models.Contact
}

export const Contact = mongoose.model("Contact", contactSchema)
