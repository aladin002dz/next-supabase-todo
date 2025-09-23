"use client";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Task } from "@/lib/_types";
import { Trash2 } from "lucide-react";
import { deleteTask } from "../actions/actions";

interface TaskCardProps {
    task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
    const handleDelete = async () => {
        try {
            await deleteTask(task.id);
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>{task.title}</CardTitle>
                <CardAction>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={handleDelete}
                        className="h-8 w-8 p-0"
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    {task.description || "No description provided"}
                </CardDescription>
            </CardContent>
        </Card>
    );
}
