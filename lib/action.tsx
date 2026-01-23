"use server"

import connectToDb from "./connectToDb"
import type { Contact as ContactType } from "@/types/typeContact"
import type { Deal as DealType } from "@/types/typeDeal"
import { Contact, Deal } from "./models"
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

export const addDeal = async (formData: DealType) => {
  const { title, contact, value, stage, expectedCloseDate, description } =
    formData
  try {
    await connectToDb()
    const newDeal = new Deal({
      title,
      contact,
      value,
      stage,
      expectedCloseDate,
      description,
    })
    await newDeal.save()
    console.log("saved" + newDeal)
    revalidatePath("/deals")
  } catch (err) {
    console.log(err)
  }
  redirect("/deals")
}

export const getDealsAll = async () => {
  try {
    await connectToDb()
    const deals = await Deal.find()
    return JSON.parse(JSON.stringify(deals))
  } catch (err) {
    console.log(err)
  }
}

export const removeDeal = async (Id: string) => {
  try {
    await connectToDb()
    await Deal.deleteOne({ _id: Id })
    revalidatePath("/deals")
  } catch (err) {
    console.log(err)
  }
  redirect("/deals")
}
