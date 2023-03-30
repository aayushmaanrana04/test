import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Drawer from "@/components/drawer";
import Stats from "@/components/statsSection";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Link from "next/link";
import ServiceSection from "@/components/serviceSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>CYPHINIX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.home}>
        <Hero />
        <Stats />
        <ServiceSection/>
        <Faq />
      </main>
    </>
  );
}
