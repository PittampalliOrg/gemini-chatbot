import { auth } from "../../auth";


interface GraphResponse {
  "@odata.context": string;
  "@microsoft.graph.tips": string;
  value: Task[];
}

interface Task {
  id: string;
  title: string;
  status: string;
  importance: string;
  categories: string[];
}

interface Body {
  content: string;
  contentType: string;
}

interface LinkedResource {
  webUrl: string;
  applicationName: string;
  displayName: string;
  externalId: string;
  id: string;
}

interface ChecklistItem {
  displayName: string;
  createdDateTime: string;
  isChecked: boolean;
  id: string;
}

async function getTasks(): Promise<Task[]> {
  const session = await auth();
  const token = session?.accessToken 
  const res = await fetch("https://graph.microsoft.com/v1.0/me/todo/lists/AAMkADhmYjY3M2VlLTc3YmYtNDJhMy04MjljLTg4NDI0NzQzNjJkMAAuAAAAAAAqiN_iXOf5QJoancmiEuQzAQAVAdL-uyq-SKcP7nACBA3lAAAAO9QQAAA=/tasks", {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  const data: GraphResponse = await res.json();

  return data.value
}

export default async function TaskPage() {
  const tasks = await getTasks()
  return (
    <>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </>
  );
}

