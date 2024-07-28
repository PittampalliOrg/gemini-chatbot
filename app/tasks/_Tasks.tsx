// import { promises as fs } from "fs"
// import path from "path"
// import { Metadata } from "next"
// import Image from "next/image"
// import { z } from "zod"
// import { auth } from "../auth";
// import { columns } from "./components/columns"
// import { DataTable } from "./components/data-table"
// import { UserNav } from "./components/user-nav"
// import { taskSchema } from "./data/schema"

// interface GraphResponse {
//   "@odata.context": string;
//   "@microsoft.graph.tips": string;
//   value: Task[];
// }

// interface Task {
//   id: string;
//   title: string;
//   status: string;
//   importance: string;
//   categories: string[];
// }

// interface Body {
//   content: string;
//   contentType: string;
// }

// interface LinkedResource {
//   webUrl: string;
//   applicationName: string;
//   displayName: string;
//   externalId: string;
//   id: string;
// }

// interface ChecklistItem {
//   displayName: string;
//   createdDateTime: string;
//   isChecked: boolean;
//   id: string;
// }



// export const metadata: Metadata = {
//   title: "Tasks",
//   description: "A task and issue tracker build using Tanstack Table.",
// }

// // Simulate a database read for tasks.
// async function getTasks(): Promise<Task[]> {
//   const session = await auth();
//   const res = await fetch("https://graph.microsoft.com/v1.0/me/todo/lists/AAMkADhmYjY3M2VlLTc3YmYtNDJhMy04MjljLTg4NDI0NzQzNjJkMAAuAAAAAAAqiN_iXOf5QJoancmiEuQzAQAVAdL-uyq-SKcP7nACBA3lAAAAO9QQAAA=/tasks", {
//     headers: {
//         Authorization: `Bearer ${session?.accessToken}`,
//     },
// });
//   const data: GraphResponse = await res.json();

//   return data.value
// }

// export default async function TaskPage() {
//   const tasks = await getTasks()

//   return (
//     <>
//       <div className="md:hidden">
//         <Image
//           src="/examples/tasks-light.png"
//           width={1280}
//           height={998}
//           alt="Playground"
//           className="block dark:hidden"
//         />
//         <Image
//           src="/examples/tasks-dark.png"
//           width={1280}
//           height={998}
//           alt="Playground"
//           className="hidden dark:block"
//         />
//       </div>
//       <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
//         <div className="flex items-center justify-between space-y-2">
//           <div>
//             <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
//             <p className="text-muted-foreground">
//               Here&apos;s a list of your tasks for this month!
//             </p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <UserNav />
//           </div>
//         </div>
//         <DataTable data={tasks} columns={columns} />
//       </div>
//     </>
//   )
// }
