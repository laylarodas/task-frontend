import { NoteFormData } from "@/types/index"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "../ErrorMessage"

export default function AddNoteForm() {

    const initialValues: NoteFormData = {
        content: ''
    }


    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialValues
    })

    const handleAddNote = (formData: NoteFormData) => {
        console.log(formData)
    }

    return (
        <form
            onSubmit={handleSubmit(handleAddNote)}
            className="space-y-3"
            noValidate
        >
            <div className=" flex flex-col gap-2 ">
                <label htmlFor="content" className=" font-bold">Create Note</label>
                <input type="text" id="content" placeholder="Note Content" className=" w-full p-3 border border-gray-300" {...register('content', {
                    required: 'Note content is required'

                })} />
                {errors.content && (
                    <ErrorMessage>{errors.content?.message}</ErrorMessage>
                )}
            </div>

            <input type="submit" value="Create Note" className=" bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-2 text-white cursor-pointer" />
        </form>
    )
}
