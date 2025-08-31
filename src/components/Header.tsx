import "../style/Header.css";

export default function Header(props: { headerText: string }) {
  return (
    <>
      <header>{props.headerText}</header>
    </>
  );
}
