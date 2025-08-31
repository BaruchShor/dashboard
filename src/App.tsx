//import { useState } from "react";
import Header from "./components/Header.tsx";
import Dashboard from "./components/Dashboard.tsx";
import Messages from "./components/Messages.tsx";
import MessageCard from "./components/MessageCard.tsx";
import Members from "./components/Members.tsx";
import MemberCard from "./components/MemberCard.tsx";
import Tasks from "./components/Tasks.tsx";
import TaskCard from "./components/TaskCard.tsx";
import Footer from "./components/Footer.tsx";
import "./App.css";
import { useState } from "react";

function App() {
  const MessagesList = ["Hello world", "Have a nice day", "Be heppy"];
  const membersList = [
    {
      name: "Hershi Shor",
      role: "admin",
      isActive: true,
      tasks: ["to done", "to go"],
    },
    {
      name: "Esti Shor",
      role: "user",
      isActive: true,
      tasks: ["to do", "to done", "to go"],
    },
    { name: "Dovi Shor", role: "guest", isActive: true, tasks: ["to go"] },
  ];

  const [tasks, setTasks] = useState<string[]>([]);

  const addMemberTasks = (memberTasks: string[]): void => {
    setTasks([...memberTasks]);
  };
  return (
    <>
      <Header headerText="Campus Club Dashboard" />
      <Dashboard>
        <Messages>
          {MessagesList.map((message) => {
            return <MessageCard message={message} />;
          })}
        </Messages>
        <Members>
          {membersList.map((member) => {
            return (
              <MemberCard
                name={member.name}
                role={member.role}
                isActive={member.isActive}
                tasks={member.tasks}
                showTasks={addMemberTasks}
              />
            );
          })}
        </Members>
        <Tasks>
          {tasks.map((task, index) => {
            return <TaskCard key={index} task={task} />;
          })}
        </Tasks>
      </Dashboard>
      <Footer footerText="Good by" />
    </>
  );
}

export default App;
