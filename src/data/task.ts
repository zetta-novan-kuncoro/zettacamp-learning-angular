
export type Task = {
  id: number
  title: string
  status: 'TODO' | 'IN PROGRESS' | 'DONE'
}

export const tasks: Task[] = [{ id: 1234, title: 'Ground the coffee', status: 'TODO' }]