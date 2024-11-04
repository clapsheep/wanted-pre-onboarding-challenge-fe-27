import { Link } from "react-router-dom";

interface BaseButtonProps {
  color?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

interface LinkButtonProps extends BaseButtonProps {
  to: string;
  type?: never;
  onClick?: never;
}

interface ActionButtonProps extends BaseButtonProps {
  to?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

const BasicButton = ({
  type = "button",
  to,
  children,
  onClick,
  className,
  color = "primary",
  disabled,
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const buttonClasses = `${baseStyles} ${
    disabled ? variants.secondary : variants[color]
  } ${className || ""}`;

  if (to) {
    return (
      <Link
        to={disabled ? "#" : to}
        className={`${buttonClasses} ${disabled ? "pointer-events-none" : ""}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default BasicButton;
