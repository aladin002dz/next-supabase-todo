"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createTask } from "../actions/actions";
import SubmitButton from "./SubmitButton";


export default function NewListButton() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        try {
            await createTask(formData);
            setOpen(false); // Close dialog after successful submission
            // Server action handles revalidation automatically
        } catch (error) {
            console.error("Error creating task:", error);
            // Dialog stays open on error
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Create New</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New List</DialogTitle>
                </DialogHeader>
                <form action={handleSubmit}>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" placeholder="Title..." />

                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" name="description" placeholder="Task Description ..." />

                        </div>
                    </div>
                    <DialogFooter>
                        <SubmitButton />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
