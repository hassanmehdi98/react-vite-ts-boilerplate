import "./index.css";

type Props = {
    children: React.ReactNode;
    variant?: "success" | "primary" | "warning" | "danger"
    onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({children, variant="primary", onClick = () => {}}) => {
    return <button className={variant} onClick={onClick}>{children}</button>
}

export default Button;