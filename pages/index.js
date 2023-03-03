import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Home: Contrate um Programador - Desenvolvimento de software personalizado"
        description="O Contrate um Programador oferece soluções personalizadas de desenvolvimento de software para atender às necessidades exclusivas do seu negócio. Nossa equipe experiente de programadores trabalha em estreita colaboração com você para desenvolver soluções inovadoras que otimizam processos e aumentam a eficiência. Entre em contato conosco hoje mesmo para saber como podemos ajudar você a levar seu projeto para o próximo nível."
        canonical="https://contrateumprogramador.com/"
        openGraph={{
          url: "https://contrateumprogramador.com/",
        }}
        lang="pt-BR"
      />
      <Head>
        <title>
          Contrate um Programador - Desenvolvimento de software personalizado
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
