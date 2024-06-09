import NewPasswordToken from "@/components/auth/NewPasswordToken"
import NewPasswordForm from "@/components/auth/NewPasswordForm"
import { useState } from "react"


export default function NewPasswordView() {

  const [ isValidToken, setIsValidToken ] = useState(false)


  return (
    <>
      <h1 className="text-center text-4xl font-black text-white">Reset Password</h1>
      <p className="text-center text-xl font-light text-white mt-5">
        Enter the code to {''}
        <span className=" text-fuchsia-500 font-bold"> reset your password</span>
      </p>

      {!isValidToken ? <NewPasswordToken /> : <NewPasswordForm />   }
    </>
  )
}
