import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ForgotPasswordForm } from "../../types";
import { ErrorMessage } from "@/components/ErrorMessage";

export default function ForgotPasswordView() {
    const initialValues: ForgotPasswordForm = {
        email: ''
    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: initialValues });

    const handleForgotPassword = (formData: ForgotPasswordForm) => { }


    return (
        <>

            <h1 className="text-center text-4xl font-black text-white">Reset Password</h1>
            <p className="text-center text-xl font-light text-white mt-5">
                Forgot your password? {''}
                <span className=" text-fuchsia-500 font-bold"> Enter your email </span>
            </p>
            <form
                onSubmit={handleSubmit(handleForgotPassword)}
                className="space-y-8 p-10 my-3  bg-white"
                noValidate
            >
                <div className="flex flex-col gap-5">
                    <label
                        className="font-normal text-2xl"
                        htmlFor="email"
                    >Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Registration email"
                        className="w-full p-3  border-gray-300 border"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.email && (
                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                </div>

                <input
                    type="submit"
                    value='Send instructions'
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
                />
            </form>

            <nav className="mt-8 flex flex-col space-y-4">
                <Link
                    to='/auth/login'
                    className="text-center text-gray-300 font-normal"
                >
                    Already have you an account? Login
                </Link>

                <Link
                    to='/auth/register'
                    className="text-center text-gray-300 font-normal"
                >
                    Do you not have an account? Register
                </Link>
            </nav>
        </>
    )
}