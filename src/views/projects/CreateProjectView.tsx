import { Link } from 'react-router-dom'

export const CreateProjectView = () => {
  return (
    <>
      <h1 className=" text-5xl font-black"> Create Project</h1>
      <p className="  text-2xl font-light text-gray-500 mt-5">
        Complete the form to create a new project
      </p>


      <nav className='my-5'>
        <Link to='/' className=' bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white-xl font-bold cursor-pointer transition-colors'>Back to Projects</Link>
      </nav>
    </>
  )
}
