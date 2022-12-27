export interface DataType {
    key: number,
    title: string,
    progress: React.ReactNode,
    start: string,
    status: string,
    tags: string[],
  }
let data : DataType[]= [
    {
    key: 1,
    title: "Do homework",
    progress: 90,
    start: "string",
    status: "string",
    tags: ["Done","Important"]
    },
    {
    key: 2,
    title: "string",
    progress: 30,
    start: "string",
    status: "string",
    tags: ["Inprogress","Important"]
    },
    {
    key: 3,
    title: "string",
    progress: 89,
    start: "string",
    status: "string",
    tags: ["Important", 'Not Started']
    }
]



localStorage.setItem('todolist', JSON.stringify(data))