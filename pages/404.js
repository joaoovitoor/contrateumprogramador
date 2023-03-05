import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <>
      <div className="text-black bg-black">
        <NextSeo
          title="404: Contrate um Programador"
          description="404 page for all our missing pages"
          canonical="https://contrateumprogramador.com/404"
          openGraph={{
            url: "https://contrateumprogramador.com/404",
          }}
        />
        <Head>
          <title>Contrate um Programador - Página não encontrada</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className="flex flex-col justify-center mx-auto mt-52 text-center max-w-2x1">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            404 – Unavailable
          </h1>
          <br />
          <a
            className="w-64 p-1 mx-auto font-bold text-center text-white border border-gray-500 rounded-lg sm:p-4"
            href="/"
          >
            Retornar
          </a>
        </div>
        <div className="mt-64"></div>
        <Footer />
      </div>
    </>
  );
}
