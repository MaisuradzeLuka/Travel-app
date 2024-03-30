import Image from "next/image";

interface IButton {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
}

const Button = ({ type, title, icon, variant }: IButton) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={23} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
