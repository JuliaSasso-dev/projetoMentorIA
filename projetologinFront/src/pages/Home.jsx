import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="home">
      <Sidebar />

      <div className="conteudo">
        <Header />

        <main className="principal">

          <Card titulo="O que estudar hoje">
            <div className="aula">
              <p>Introdução ao HTML</p>
              <button className="btn-aula">
                Assistir Aula
              </button>
            </div>

            <div className="aula">
              <p>Tags HTML</p>
              <button className="btn-aula">
                Assistir Aula
              </button>
            </div>
          </Card>

          <Card titulo="Mentoria IA">
            <p>Precisa de ajuda?</p>

            <button className="btn-aula">
              Falar com a Mentoria IA
            </button>
          </Card>

        </main>
      </div>
    </div>
  );
}