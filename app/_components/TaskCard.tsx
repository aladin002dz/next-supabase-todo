"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        <Card className="w-full">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{task.title}</CardTitle>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={handleDelete}
                        className="h-8 w-8 p-0 flex-shrink-0"
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            {task.description && (
                <CardContent className="pt-0">
                    <CardDescription>
                        {task.description}
                    </CardDescription>
                </CardContent>
            )}
        </Card>
    );
}
