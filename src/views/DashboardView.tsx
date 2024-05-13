import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProjects } from '@/api/ProjectAPI'

export const DashboardView = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  })

  if(isLoading) return 'Loading...'
  console.log(isLoading)
  console.log(data)
  return (
    <>
      <h1 className=" text-5xl font-black"> My Projects</h1>
      <p className="  text-2xl font-light text-gray-500 mt-5">
        Manage your projects
      </p>


      <nav className='my-5'>
        <Link to='/projects/create' className=' bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white-xl font-bold cursor-pointer transition-colors'>New Project</Link>
      </nav>
    </>
  )
}
