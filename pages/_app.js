
import Drawer from "@/components/drawer";
import Footer from "@/components/footer";
import "@/styles/globals.css";
import Navbar from "../components/Navbar";

// import '../utils/fontawesome';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className={"gridlines"}>
        <div className={"lines"}></div>
        <div className={"lines"}></div>
        <div className={"lines"}></div>
        <div className={"lines"}></div>
        <div className={"lines"}></div>
        <div className={"lines"}></div>
        <div className={"lines"}></div>
        <div className={"lines"}></div>
        <div className={"lines"}></div>
        <div className={"lines"}></div>
        <div className={"lines"}></div>
        <div className={"lines"}></div>
      </div>
        <Component {...pageProps} />
      <Footer />
    </>
  );
}
