import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
export default function Pagecontainer({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
