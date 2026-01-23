"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"
import { addContact } from "@/lib/action"
import { ContactFormData } from "@/types/typeContact"

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters.")
    .max(32, "Name must be at most 32 characters.")
    .trim(),
  email: z.string().email("Invalid email address.").trim(),
  phone: z
    .string()
    .min(9, "Phone number must be at least 9 characters.")
    .max(15, "Phone number must be at most 15 characters.")
    .trim(),
  company: z
    .string()
    .min(3, "Company name must be at least 3 characters.")
    .max(20, "Company name must be at most 20 characters.")
    .trim(),
  notes: z
    .string()
    .min(5, "Notes must be at least 5 characters.")
    .max(100, "Notes must be at most 100 characters.")
    .trim(),
})

export function NewContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      notes: "",
    },
  })

  async function onSubmit(data: ContactFormData) {
    toast.success("You submitted the following values:", {
      description: (
        <pre className='bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4'>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
    await addContact(data)
  }

  return (
    <Card className='w-full border border-primary'>
      <CardHeader>
        <CardTitle>
          {" "}
          <h2 className='text-xl font-semibold'>Add New Contact</h2>
          <p className=''>
            Create a new contact to manage your customer relationships.
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form id='form-rhf-select' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name='name'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  className='w-full flex flex-col gap-2 '
                >
                  <FieldLabel htmlFor={field.name} className=''>
                    Name
                  </FieldLabel>

                  <FieldContent className='w-full '>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder='Enter name'
                      autoComplete='off'
                    />
                    <FieldError className='text-red-500'>
                      {fieldState.error?.message}
                    </FieldError>
                  </FieldContent>
                </Field>
              )}
            />
            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  className='w-full flex flex-col gap-2 '
                >
                  <FieldLabel htmlFor={field.name} className=''>
                    Email
                  </FieldLabel>

                  <FieldContent className='w-full '>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder='Enter email'
                      autoComplete='off'
                    />
                    <FieldError className='text-red-500'>
                      {fieldState.error?.message}
                    </FieldError>
                  </FieldContent>
                </Field>
              )}
            />
            <Controller
              name='phone'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  className='w-full flex flex-col gap-2 '
                >
                  <FieldLabel htmlFor={field.name} className=''>
                    Phone
                  </FieldLabel>

                  <FieldContent className='w-full '>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder='Enter phone number'
                      autoComplete='off'
                    />
                    <FieldError className='text-red-500'>
                      {fieldState.error?.message}
                    </FieldError>
                  </FieldContent>
                </Field>
              )}
            />
            <Controller
              name='company'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  className='w-full flex flex-col gap-2 '
                >
                  <FieldLabel htmlFor={field.name} className=''>
                    Company
                  </FieldLabel>

                  <FieldContent className='w-full '>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder='Enter company name'
                      autoComplete='off'
                    />
                    <FieldError className='text-red-500'>
                      {fieldState.error?.message}
                    </FieldError>
                  </FieldContent>
                </Field>
              )}
            />
            <Controller
              name='notes'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  className='w-full flex flex-col gap-2 '
                >
                  <FieldLabel htmlFor={field.name} className=''>
                    Notes
                  </FieldLabel>

                  <FieldContent className='w-full '>
                    <Textarea
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder='Enter notes'
                      autoComplete='off'
                    />
                    <FieldError className='text-red-500'>
                      {fieldState.error?.message}
                    </FieldError>
                  </FieldContent>
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation='horizontal'>
          <Button
            type='button'
            variant='outline'
            onClick={() => form.reset()}
            className='mr-auto cursor-pointer px-4'
          >
            Reset
          </Button>
          <Button
            type='submit'
            form='form-rhf-select'
            className='ml-auto px-4 cursor-pointer'
          >
            Add Contact
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
