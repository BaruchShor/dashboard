import { type PropsWithChildren } from "react";
import "../style/Dashboard.css";

export default function Dashboard({ children }: PropsWithChildren) {
  return (
    <>
      <main id="dashboard">{children}</main>
    </>
  );
}
