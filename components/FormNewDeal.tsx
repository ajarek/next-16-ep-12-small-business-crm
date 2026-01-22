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
import { addDeal } from "@/lib/action"

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters.")
    .max(32, "Title must be at most 32 characters.")
    .trim(),
  contact: z.string().min(3, "Contact name is required.").trim(),
  value: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Value must be at least 1."),
  ),
  stage: z
    .string()
    .min(3, "Stage must be at least 3 characters.")
    .max(20, "Stage must be at most 20 characters.")
    .trim(),
  expectedCloseDate: z
    .string()
    .min(5, "Expected close date is required.")
    .trim(),
  description: z
    .string()
    .min(5, "Description must be at least 5 characters.")
    .trim(),
})

export function NewDealForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      contact: "",
      value: 0,
      stage: "",
      expectedCloseDate: "",
      description: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
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
    // @ts-expect-error - addDeal expects Deal type which matches data but TS is being strict
    await addDeal(data)
  }

  return (
    <Card className='w-full border border-primary'>
      <CardHeader>
        <CardTitle>
          {" "}
          <h2 className='text-xl font-semibold'>Add New Deal</h2>
          <p className=''>
            Create a new deal to track your sales opportunities.
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form id='form-rhf-select' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name='title'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  className='w-full flex flex-col gap-2 '
                >
                  <FieldLabel htmlFor={field.name} className=''>
                    Title
                  </FieldLabel>

                  <FieldContent className='w-full '>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder='Enter deal title'
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
              name='contact'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  className='w-full flex flex-col gap-2 '
                >
                  <FieldLabel htmlFor={field.name} className=''>
                    Contact
                  </FieldLabel>

                  <FieldContent className='w-full '>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder='Enter contact name'
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
              name='value'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  className='w-full flex flex-col gap-2 '
                >
                  <FieldLabel htmlFor={field.name} className=''>
                    Value ($)
                  </FieldLabel>

                  <FieldContent className='w-full '>
                    <Input
                      {...field}
                      type='number'
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder='Enter value'
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
              name='stage'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  className='w-full flex flex-col gap-2 '
                >
                  <FieldLabel htmlFor={field.name} className=''>
                    Stage
                  </FieldLabel>

                  <FieldContent className='w-full '>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder='Enter stage (e.g. Lead, Proposal)'
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
              name='expectedCloseDate'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  className='w-full flex flex-col gap-2 '
                >
                  <FieldLabel htmlFor={field.name} className=''>
                    Expected Close Date
                  </FieldLabel>

                  <FieldContent className='w-full '>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder='YYYY-MM-DD'
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
              name='description'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  className='w-full flex flex-col gap-2 '
                >
                  <FieldLabel htmlFor={field.name} className=''>
                    Description
                  </FieldLabel>

                  <FieldContent className='w-full '>
                    <Textarea
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder='Enter description'
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
            Add Deal
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
