import "../style/MessageCard.css";

export default function MessageCard(props: { message: string }) {
  return (
    <>
      <article className="messageCard card">
        <p id="message">{props.message}</p>
      </article>
    </>
  );
}
