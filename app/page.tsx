import { Task } from "@/lib/_types";
import { prisma } from "@/prisma";
import NewListButton from "./_components/NewTaskForm";
import TaskCard from "./_components/TaskCard";

export default async function Home() {

  const myTasks: Task[] = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    }
  })

  return (
    <div className="flex flex-col w-full justify-center items-center p-4 gap-4">
      <div className="w-full max-w-2xl">
        <div className="flex w-full justify-between items-center mb-6">
          <h1 className="text-xl font-bold">My Tasks</h1>
          <NewListButton />
        </div>
        <div className="flex flex-col w-full space-y-4">
          {myTasks.length > 0 ? (
            myTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 italic">No tasks found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
