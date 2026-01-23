"use server"

import { ContactFormData } from "@/types/typeContact"
import { DealFormData } from "@/types/typeDeal"
import { Contact, Deal } from "./models"
import { addData, getData, removeData } from "./data"

export const addContact = async (formData: ContactFormData) => {
  await addData(Contact, formData, "/contacts")
}

export const getContactsAll = async () => {
  return await getData(Contact)
}

export const removeContact = async (Id: string) => {
  await removeData(Contact, Id, "/contacts")
}

export const addDeal = async (formData: DealFormData) => {
  await addData(Deal, formData, "/deals")
}

export const getDealsAll = async () => {
  return await getData(Deal)
}

export const removeDeal = async (Id: string) => {
  await removeData(Deal, Id, "/deals")
}
