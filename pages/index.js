import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Home: Contrate um Programador - para Empresas de Médio Porte"
        description="Soluções Personalizadas de Desenvolvimento de Software para sua Empresa"
        canonical="https://contrateumprogramador.com/"
        openGraph={{
          url: "https://contrateumprogramador.com/",
        }}
        lang="pt-BR"
      />
      <Head>
        <title>Contrate um Programador</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
