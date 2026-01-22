"use server"

import connectToDb from "./connectToDb"
import type { Contact as ContactType } from "@/types/typeContact"
import { Contact } from "./models"
import { revalidatePath } from "next/cache"

import { redirect } from "next/navigation"

export const addContact = async (formData: ContactType) => {
  const { name, email, phone, company, notes } = formData
  try {
    await connectToDb()
    const newContact = new Contact({
      name,
      email,
      phone,
      company,
      notes,
    })
    await newContact.save()
    console.log("saved" + newContact)
    revalidatePath("/contacts")
  } catch (err) {
    console.log(err)
  }
  redirect("/contacts")
}

// export const getShoppingList = async (username: string) => {
//   try {
//     await connectToDb()
//     const shoppingList = await ShoppingList.find({ username })
//     return JSON.parse(JSON.stringify(shoppingList))
//   } catch (err) {
//     console.log(err)
//   }
// }
export const getContactsAll = async () => {
  try {
    await connectToDb()
    const contacts = await Contact.find()
    return JSON.parse(JSON.stringify(contacts))
  } catch (err) {
    console.log(err)
  }
}

export const removeContact = async (Id: string) => {
  try {
    await connectToDb()
    await Contact.deleteOne({ _id: Id })
    revalidatePath("/contacts")
  } catch (err) {
    console.log(err)
  }
  redirect("/contacts")
}
