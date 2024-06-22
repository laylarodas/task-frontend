import AddMemberModal from "@/components/team/AddMemberModal";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProjectTeamView() {

    const navigate = useNavigate()

    const params = useParams()
    const projectId = params.projectId!// ! means that projectId is not null
    return (
        <>
            <h1 className=" text-4xl font-black">Manage Team</h1>
            <p className=" text-xl font-light text-gray-500 mt-5 capitalize">Manage the team for this project</p>
            <nav className="my-5 flex gap-3">
                <button
                    type="button"
                    className=" bg-purple-500 hover:bg-purple-600 px-10 py-3 text-white text-md font-bold cursor-pointer transition-colors"
                    onClick={() => navigate('?addMember=true')}
                >
                    Add Collaborator
                </button>

                <Link to={`/projects/${projectId}`} className="bg-fuchsia-500 hover:bg-fuchsia-600 px-10 py-3 text-white text-md font-bold cursor-pointer transition-colors">
                    Return to Project
                </Link>
            </nav>


            <AddMemberModal />
        </>
    )
}
