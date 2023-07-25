export default function Request({
  route,
  method,
  children,
}: {
  route: string;
  method: string;
  children: React.ReactNode;
}) {
  return (
    <details style={{ marginBottom: "2rem" }}>
      <summary style={{ marginBottom: "1rem" }}>
        <span
          style={{
            marginRight: "1rem",
            color: "var(--color-secondary)",
            backgroundColor: "var(--color-primary)",
            padding: ".5rem",
            borderRadius: "1rem",
          }}
        >
          {method}
        </span>
        <i>{route}</i>
      </summary>
      {children}
    </details>
  );
}
