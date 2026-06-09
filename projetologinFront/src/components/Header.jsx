import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  const navigate = useNavigate();

  function sair() {
    navigate("/login");
  }

  return (
    <header className="header">
      <Button type="button" onClick={sair}>
        Sair
      </Button>
    </header>
  );
}