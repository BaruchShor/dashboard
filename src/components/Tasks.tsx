import type { PropsWithChildren } from "react";
import "../style/Tasks.css";

export default function Tasks({ children }: PropsWithChildren) {
  return (
    <>
      <section id="tasks" className="dashCol">
        {children}
      </section>
    </>
  );
}
