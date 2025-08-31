import "../style/TaskCard.css";

export default function TaskCard(props: { task: string }) {
  return (
    <>
      <article className="taskCard card">{props.task}</article>
    </>
  );
}
