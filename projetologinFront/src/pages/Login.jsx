import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      console.log({
        email,
        senha,
      });

      setLoading(false);
      navigate("/home");
    }, 2000);
  }

  return (
    <div className="container">
      <div className="card">

        <h1 className="logo">
          Mentor <span>IA+</span>
        </h1>

        <h3 className="titulo">
          Faça seu login para entrar na plataforma
        </h3>

        <form onSubmit={handleLogin}>

          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? "Carregando..." : "Entrar"}
          </Button>

        </form>

        <div className="linha">
          <span>ou</span>
        </div>

        <button
          type="button"
          className="btn-secundario"
          onClick={() => navigate("/cadastro")}
        >
          Criar conta
        </button>

      </div>
    </div>
  );
}