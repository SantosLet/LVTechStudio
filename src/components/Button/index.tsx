type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
  "aria-disabled"?: React.AriaAttributes["aria-disabled"];
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  download = false,
  "aria-disabled": ariaDisabled,
}: ButtonProps) {
  const styles = `lvtech-button lvtech-button--${variant} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        download={download || undefined}
        aria-disabled={ariaDisabled}
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
      aria-disabled={ariaDisabled}
    >
      {children}
    </button>
  );
}
