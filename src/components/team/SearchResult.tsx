import { AddUserToProject } from "@/api/TeamAPI"
import { TeamMember } from "@/types/index"
import { useMutation } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

type SearchResultProps = {
    user: TeamMember,
    reset: () => void
}

export default function SearchResult({user, reset}: SearchResultProps) {

    const navigate = useNavigate()
    const params = useParams()
    const projectId = params.projectId!

    const { mutate } = useMutation({
        mutationFn: AddUserToProject,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            reset()
            navigate(location.pathname, { replace: true })
        }

    })

    const handleAddUserToProject = async () => {
        const data = {
            projectId,
            id: user._id
        }

        mutate(data)
    }

  return (
    <>
        <p className="mt-10 text-center font-bold">Result</p>
        <div className="flex justify-between items-center">
            <p>{user.name}</p>
            <button className=" text-purple-600 hover:bg-purple-200 px-10 py-3 font-bold cursor-pointer" onClick={handleAddUserToProject}>Add to Project</button>
        </div>
    </>
  )
}
