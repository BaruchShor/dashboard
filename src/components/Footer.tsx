import "../style/Footer.css";

export default function Footer(props: { footerText: string }) {
  return (
    <>
      <footer>{props.footerText}</footer>
    </>
  );
}
