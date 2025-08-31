export default interface Member {
  name: string;
  role: string;
  isActive: boolean;
  tasks: string[];
  showTasks: (tasks: string[]) => void;
}
