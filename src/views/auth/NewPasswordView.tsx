import NewPasswordToken from "@/components/auth/NewPasswordToken"
import NewPasswordForm from "@/components/auth/NewPasswordForm"
import { useState } from "react"
import { ConfirmToken } from "@/types/index"


export default function NewPasswordView() {

  const [ token, setToken ] = useState<ConfirmToken['token']>('')
  const [ isValidToken, setIsValidToken ] = useState(false)

  console.log(token)

  return (
    <>
      <h1 className="text-center text-4xl font-black text-white">Reset Password</h1>
      <p className="text-center text-xl font-light text-white mt-5">
        Enter the code to {''}
        <span className=" text-fuchsia-500 font-bold"> reset your password</span>
      </p>

      {!isValidToken ? 
          <NewPasswordToken token={token} setToken={setToken} setIsValidToken={setIsValidToken} /> 
        : <NewPasswordForm token={token}/>   }
    </>
  )
}
