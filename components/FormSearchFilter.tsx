"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldContent, FieldGroup } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "./ui/input"
import { Search } from "lucide-react"

const spokenTags = [
  { label: "All", value: "all" },
  { label: "Lead", value: "lead" },
  { label: "Customer", value: "customer" },
  { label: "Partner", value: "partner" },
  { label: "Vendor", value: "vendor" },
  { label: "Prospect", value: "prospect" },
  { label: "Other", value: "other" },
] as const

const formSchema = z.object({
  tags: z
    .string()
    .min(1, "Please select your spoken tags.")
    .refine((val) => val !== "auto", {
      message:
        "Auto-detection is not allowed. Please select a specific language.",
    }),
  search: z.string().optional(),
})

export function FormSearchFilter() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tags: "",
      search: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
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
  }

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>
          {" "}
          <h2 className='text-xl font-semibold'>Search & Filter</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form id='form-rhf-select' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className='flex flex-wrap items-center gap-4 w-full'>
              <Controller
                name='search'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    orientation='responsive'
                    data-invalid={fieldState.invalid}
                    className=' md:flex-1 min-w-[300px]'
                  >
                    <FieldContent className='relative'>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder='Search contacts...'
                        autoComplete='off'
                        className='pl-10'
                      />
                      <Search
                        color='var(--muted-foreground)'
                        className='absolute left-3 top-1/2 -translate-y-1/2'
                      />
                    </FieldContent>
                  </Field>
                )}
              />
              <Controller
                name='tags'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    orientation='responsive'
                    data-invalid={fieldState.invalid}
                    className='w-auto'
                  >
                    <FieldContent>
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id='form-rhf-select-language'
                          aria-invalid={fieldState.invalid}
                          className='min-w-[120px]'
                        >
                          <SelectValue placeholder='Select' />
                        </SelectTrigger>
                        <SelectContent position='item-aligned'>
                          <SelectItem value='auto'>Auto</SelectItem>
                          <SelectSeparator />
                          {spokenTags.map((tag) => (
                            <SelectItem key={tag.value} value={tag.value}>
                              {tag.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FieldContent>
                  </Field>
                )}
              />
            </div>
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
            Search
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
