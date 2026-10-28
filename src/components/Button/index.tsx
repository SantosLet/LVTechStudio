type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
  disabled?: boolean;
  title?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  download = false,
  disabled = false,
  title,
}: ButtonProps) {
  const styles = `lvtech-button lvtech-button--${variant} ${className}`;

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={styles}
        download={download || undefined}
        title={title}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={styles}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
}
