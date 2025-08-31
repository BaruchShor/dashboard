import type { PropsWithChildren } from "react";
import "../style/Messages.css";

export default function Messages({ children }: PropsWithChildren) {
  return (
    <>
      <section id="messages" className="dashCol">
        {children}
      </section>
    </>
  );
}
