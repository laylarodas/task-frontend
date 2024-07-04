

export default function AddNoteForm() {
  return (
    <form 
        onSubmit={() => {}}
        className="space-y-3"
        noValidate
    >
        <div className=" flex flex-col gap-2 ">
            <label htmlFor="content" className=" font-bold">Create Note</label>
            <input type="text" id="content" placeholder="Note Content" className=" w-full p-3 border border-gray-300"/>
        </div>

        <input type="submit" value="Create Note" className=" bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-2 text-white cursor-pointer"/>
    </form>
  )
}
