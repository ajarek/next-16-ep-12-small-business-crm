
import connectToDb from "./connectToDb"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { Model, Document } from "mongoose"

export const getData = async <T extends Document>(model: Model<T>) => {
  try {
    await connectToDb()
    const data = await model.find()
    return JSON.parse(JSON.stringify(data))
  } catch (err) {
    console.log(err)
  }
}

export const removeData = async <T extends Document>(
  model: Model<T>,
  Id: string,
  path: string,
) => {
  try {
    await connectToDb()
    await model.deleteOne({ _id: Id })
    revalidatePath(path)
  } catch (err) {
    console.log(err)
  }
  redirect(path)
}

export const addData = async <T extends Document>(
  model: Model<T>,
  formData: Partial<T>,
  path: string,
) => {
  try {
    await connectToDb()
    const newData = new model(formData)
    await newData.save()
    console.log("saved" + newData)
    revalidatePath(path)
  } catch (err) {
    console.log(err)
  }
  redirect(path)
}
