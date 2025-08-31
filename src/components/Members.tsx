import type { PropsWithChildren } from "react";
import "../style/Members.css";

export default function Members({ children }: PropsWithChildren) {
  return (
    <>
      <section id="members" className="dashCol">
        {children}
      </section>
    </>
  );
}
