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
          title="Contrate um Programador - Desenvolvimento de Software"
          description="Desenvolvimento de software personalizado para otimizar processos e aumentar a eficiência do seu negócio. Soluções inovadoras e exclusivas."
          canonical="https://contrateumprogramador.com/"
          openGraph={{
            url: "https://contrateumprogramador.com/",
          }}
        />
        <Head>
          <title>Contrate um Programador - Desenvolvimento de Software</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
