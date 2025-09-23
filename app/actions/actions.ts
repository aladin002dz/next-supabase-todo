"use server"

import { prisma } from "@/prisma"
import { revalidatePath } from "next/cache"

export async function createTask(formData: FormData) {
    const title = formData.get("title") as string
    const description = formData.get("description") as string

    // Validate that title is not empty
    if (!title || title.trim() === "") {
        throw new Error("Title is required")
    }

    await prisma.todo.create({
        data: {
            title: title.trim(),
            description: description?.trim() ?? "",
        }
    })

    revalidatePath("/")
}

export async function deleteTask(id: string) {
    await prisma.todo.delete({
        where: {
            id: id
        }
    })

    revalidatePath("/")
}   