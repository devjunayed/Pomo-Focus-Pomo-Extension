import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState();
  const [open, setOpen] = useState(false);
  return (
    <div className="border relative border-dashed p-4 rounded-xl mt-4">
      <div className="flex justify-between pb-4  items-center  border-b">
        <h4 className="text-xl">All Tasks</h4>
        <button onClick={()=> setOpen(true)}>+ Add Task</button>
      </div>

      {open && (
        <div className="absolute top-0 left-0 w-[350px] bg-white  p-4 rounded-xl min-h-20 flex flex-col gap-4 items-center justify-center">
            <h4 className="text-black">Add Task</h4>
          <input
            placeholder="Enter Task name"
            className="rounded-lg w-full text-black p-2 border-black border outline-black"
            type="text"
          />
          <input
            placeholder="Enter Task name"
            className="rounded-lg w-full text-black p-2 border-black border outline-black"
            type="text"
          />
          <button onClick={() => setOpen(false)} className="btn">Add</button>
        </div>
      )}
    </div>
  );
};

export default Tasks;
