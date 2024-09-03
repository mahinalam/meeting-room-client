// import { z } from "zod";

// export const bookingSchema = z.object({
//   date: z.string({ required_error: "Please select a date" }),
//   slots: z.array({ required_error: "Please select any slots" }),
//   email: z.string({ required_error: "Please provide an email" }),
//   name: z.string({ required_error: "Please provide a name" }),
//   phone: z.string({ required_error: "Please provide phone number" }),
//   address: z.string({ required_error: "Please provide an address" }),
// });

import { z } from "zod";

// Define the Zod schema
export const bookingSchema = z.object({
  date: z.date({ required_error: "please select a date" }), // Assuming date will be passed as a string
  slots: z.array(z.string()).nonempty("At least one slot must be selected"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  name: z.string().nonempty("Name is required"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits long")
    .nonempty("Phone number is required"),
  address: z.string().nonempty("Address is required"),
});

// Usage Example:
// const { register, handleSubmit, formState: { errors } } = useForm({
//   resolver: zodResolver(bookingSchema),
// });
