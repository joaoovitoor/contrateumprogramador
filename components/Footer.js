export default function Footer() {
  return (
    <>
      <footer className="pb-4 text-gray-200 border-t border-gray-200">
        <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
            <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row invisible md:visible">
              <li>
                <a
                  href="mailto:contrateumprogramador.com"
                  className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
                >
                  E-mail
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511980668176"
                  target="_blank"
                  className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <ul className="flex flex-col mb-3 space-y-2 sm:space-y-0 sm:space-x-5">
              <a
                href="/"
                className="text-md text-gray-200 text-center lg:text-left hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
              >
                © 2023 Contrate um Programador.
              </a>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
