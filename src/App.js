import Footer from "./Footer";
import Header from "./Header";
import Profil from "./Profil";

function App() {
  const user = {
    name: "John",
    surname: "Doe",
    age: 36,
    city: "Paris",
    isLogged: true,
  };

  return (
    <>
      <Header user={user} />
      <Profil user={user} />
      <Footer />
    </>
  );
}

export default App;
