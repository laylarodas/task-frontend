import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";

type ProjectFormProps = {
    register: UseFormRegister<{
        projectName: string;
        clientName: string;
        description: string;
    }>,
    errors: FieldErrors<{
        projectName: string;
        clientName: string;
        description: string;
    }>
}

export default function ProjectForm({register, errors}: ProjectFormProps) {
    return (
        <>
            <div className="mb-5 space-y-3">
                <label htmlFor="projectName" className="text-sm uppercase font-bold">
                    Project Name
                </label>
                <input
                    id="projectName"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Projec Name"
                    {...register("projectName", {
                        required: "The project name is required",
                    })}
                />

                {errors.projectName && (
                    <ErrorMessage>{errors.projectName.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="clientName" className="text-sm uppercase font-bold">
                    Client Name
                </label>
                <input
                    id="clientName"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Client Name"
                    {...register("clientName", {
                        required: "The client name is required",
                    })}
                />

                {errors.clientName && (
                    <ErrorMessage>{errors.clientName.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="description" className="text-sm uppercase font-bold">
                    Description
                </label>
                <textarea
                    id="description"
                    className="w-full p-3  border border-gray-200"
                    placeholder="Project Description"
                    {...register("description", {
                        required: "The project description is required"
                    })}
                />

                {errors.description && (
                    <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
            </div>
        </>
    )
}