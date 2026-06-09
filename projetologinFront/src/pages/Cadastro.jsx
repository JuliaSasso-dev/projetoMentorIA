import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const usuario = {
      nome,
      email,
      senha,
    };

    console.log(
      JSON.stringify(usuario, null, 2)
    );

    alert("Cadastro realizado!");
    navigate("/login")
  }

  return (
    <div className="container">
      <div className="card">

        <h1 className="logo">
          Mentor <span>IA+</span>
        </h1>

        <h3 className="titulo">
          Faça seu cadastro para utilizar a plataforma
        </h3>

        <form onSubmit={handleSubmit}>

          <Input
            label="Nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

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

          <Input
            label="Confirmar Senha"
            type="password"
            value={confirmarSenha}
            onChange={(e) =>
              setConfirmarSenha(e.target.value)
            }
          />

          <div className="botoes">

            <button
              type="button"
              className="btn-voltar"
              onClick={() => navigate("/login")}
            >
              Voltar
            </button>

            <Button type="submit">
              Cadastrar
            </Button>

          </div>

        </form>

      </div>
    </div>
  );
}