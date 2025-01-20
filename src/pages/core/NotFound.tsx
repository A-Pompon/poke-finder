import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <main style={{ paddingTop: "1em" }}>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2em",
        }}
      >
        <h1>NotFound</h1>
        <section style={{ width: "80%" }}>
          <p>
            Désolé une erreur est survenue, il ne faut pas actualiser le
            navigateur lorsque l'on se trouve sur les détails d'un pokémon.
          </p>
        </section>
        <button onClick={handleBack} className="btn primary">
          Retour
        </button>
      </section>
    </main>
  );
};

export default NotFound;
