import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { UserLoginForm } from "@/types/index";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import { authenticateUser } from "@/api/AuthAPI";
import { toast } from "react-toastify";

export default function LoginView() {

    const navigate = useNavigate()

    const initialValues: UserLoginForm = {
        email: '',
        password: '',
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

    const { mutate } = useMutation({
        mutationFn: authenticateUser,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: () => {
            navigate('/')
        }
    })

    const handleLogin = (formData: UserLoginForm) => mutate(formData)

    return (
        <>
            <h1 className="text-center text-4xl font-black text-white">Login</h1>
            <p className="text-center text-xl font-light text-white mt-5">
                Complete the form to {''}
                <span className=" text-fuchsia-500 font-bold"> enter your account</span>
            </p>
            <form
                onSubmit={handleSubmit(handleLogin)}
                className="space-y-8 p-10 mt-8 bg-white"
                noValidate
            >
                <div className="flex flex-col gap-5">
                    <label
                        className="font-normal text-2xl"
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

                <div className="flex flex-col gap-5">
                    <label
                        className="font-normal text-2xl"
                    >Password</label>

                    <input
                        type="password"
                        placeholder="Registration password"
                        className="w-full p-3  border-gray-300 border"
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    {errors.password && (
                        <ErrorMessage>{errors.password.message}</ErrorMessage>
                    )}
                </div>

                <input
                    type="submit"
                    value='Login'
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-bold  text-lg cursor-pointer"
                />
            </form>

            <nav className=" mt-10 flex flex-col space-y-4">
                <Link to={'/auth/register'} className=" text-center text-gray-300 font-normal">
                    Do you not have an account? <span className=" font-bold">Register</span>
                </Link>
                <Link to={'/auth/forgot-password'} className=" text-center text-gray-300 font-normal">
                    Forgot your password? <span className=" font-bold"> Reset</span>
                </Link>
            </nav>
        </>
    )
}