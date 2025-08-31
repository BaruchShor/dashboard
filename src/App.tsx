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

function App() {
  const MessagesList = ["Hello world", "Have a nice day", "Be heppy"];
  const membersList = [
    { name: "Hershi Shor", role: "admin", isActive: true },
    { name: "Esti Shor", role: "user", isActive: true },
    { name: "Dovi Shor", role: "guest", isActive: true },
  ];
  return (
    <>
      <Header headerText="Wellcome To Fucking Dashboard Pages" />
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
              />
            );
          })}
        </Members>
        <Tasks>
          <TaskCard task="To do" />
          <TaskCard task="Done" />
        </Tasks>
      </Dashboard>
      <Footer footerText="Good by" />
    </>
  );
}

export default App;
