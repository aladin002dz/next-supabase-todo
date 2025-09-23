import { Task } from "@/lib/_types";
import { prisma } from "@/prisma";
import NewListButton from "./_components/NewListButton";

export default async function Home() {

  const myTasks: Task[] = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    }
  })

  return (
    <div className="flex flex-col w-full justify-center items-center p-4 gap-4 space-y-2">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-xl font-bold">My Tasks</h1>
        <NewListButton />
      </div>
      <div className="flex flex-col w-full space-y-11  justify-between items-center">
        {myTasks.length > 0 ? (
          myTasks.map((task) => (
            <div key={task.id}>
              <h2 className="text-lg font-bold">{task.title}</h2>
              <p>{task.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No tasks found</p>
        )}
      </div>
    </div>
  );
}
