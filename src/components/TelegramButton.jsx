export default function TelegramButton() {
  return (
    <a
      href="https://t.me/stem_academia_bot?start=question"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "#229ED9",
        color: "white",
        padding: "12px 24px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "600",
        fontSize: "15px"
      }}
    >
      💬 Задать вопрос менеджеру
    </a>
  );
}
