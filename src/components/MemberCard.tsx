import "../style/MemberCard.css";
import type Member from "../interfaces/MemberInterfac.tsx";

export default function MemberCard({ name, role, isActive }: Member) {
  return (
    <>
      <article className="memberCard card">
        <h2 id="avatar">BS</h2>
        <section>
          <div id="information">
            <p id="name">{name}</p>
            <p id="role">{role}</p>
          </div>
          <div id="IsActiv">{isActive ? "Active" : "No active"}</div>
        </section>
        <button id="roleBtn">Role</button>
      </article>
    </>
  );
}
