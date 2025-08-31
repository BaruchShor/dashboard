import "../style/MemberCard.css";
import type Member from "../interfaces/MemberInterfac.tsx";

export default function MemberCard({
  name,
  role,
  isActive,
  tasks,
  showTasks,
}: Member) {
  const getAvatar = () => {
    const arrName: string[] = name.split(" ");
    console.log(arrName);
    let avatar: string = "";
    arrName.forEach((e) => {
      avatar += e[0];
    });
    return avatar;
  };
  return (
    <>
      <article className="memberCard card">
        <h2 id="avatar">{getAvatar()}</h2>
        <section>
          <div id="information">
            <p id="name">{name}</p>
            <p id="role">{role}</p>
          </div>
          <div id="IsActiv">{isActive ? "Active" : "No active"}</div>
        </section>
        <button
          id="roleBtn"
          onClick={() => {
            showTasks(tasks);
          }}
        >
          Role
        </button>
      </article>
    </>
  );
}
