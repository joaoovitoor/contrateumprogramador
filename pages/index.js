import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <div className="text-black bg-black">
        <NextSeo
          title="Contrate um Programador - Desenvolvimento Web em SP"
          description="Contrate um Programador Especializado em São Paulo. Desenvolvimento Web, Integração de APIs e mais. Solicite um Orçamento pelo WhatsApp."
          canonical="https://contrateumprogramador.com/"
          openGraph={{
            url: "https://contrateumprogramador.com/",
          }}
        />
        <Head>
          <title>Contrate um Programador - Desenvolvimento Web em SP</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
