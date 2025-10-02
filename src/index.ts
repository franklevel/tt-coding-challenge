import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000;

type StatusType = "pending" | "in-progress" | "completed";

type TaskType = {
  id: string;
  title: string;
  description?: string;
  status: StatusType | "pending";
  createdAt: Date;
  updatedAt: Date;
};

const tasks: TaskType[] = [];

app.use(express.json());

//Create a new task
app.post("/task", (req: Request, res: Response) => {
  const { body } = req;

  tasks.push(body);

  res.sendStatus(201);
});

//Retrieve all tasks
app.get("/task", (req: Request, res: Response) => {
  res.send({ tasks });
});

//Retrieve a single task by ID
app.post("/task/:id", (req: Request, res: Response) => {
  const {id} = req.params;  
  const task = tasks.find(el => el.id === id);  
  if (!task) {
    res.status(404);
  }
  res.send(task);
});

//Update a task’s status (e.g., pending, completed)
app.put("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

//Delete a task
app.delete("/task/:id", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
