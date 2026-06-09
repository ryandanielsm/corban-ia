import "./Footer.css";
import LogoSolo from "../../assets/logo-solo.png";

function Footer() {
  return (
    <footer className="bg-[#073B70] text-white rounded-t-[50px] px-6 pt-10 mt-20 pb-4 md:rounded-t-[80px] md:px-12 lg:px-20 lg:mt-[50px]">
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:items-start lg:gap-12">
      
      {/* Logo / título / subtítulo */}
      <div className="flex flex-col items-center text-center">
        <img src={LogoSolo} alt="Corban IA" className="w-32 mb-4 md:w-40 lg:w-[200px]" />
        <h2 className="titulo-footer text-xl md:text-2xl font-bold">
          CORBAN IA
        </h2>
        <p className="paragrafo-footer mb-10 text-xs md:text-sm">
          Tecnologia para Correspondentes Bancários IA
        </p>
      </div>

      {/* Informações */}
      <div className="flex flex-col gap-8 w-full md:flex-row md:flex-wrap md:justify-center lg:flex-nowrap lg:gap-14 lg:mt-6">
        
        <div className="border-l border-white/30 pl-5 lg:pl-8 lg:h-80">
          <h3 className="font-bold mb-4">Empresa:</h3>
          <p className="mt-6 lg:mt-12 italic">
            WK Tecnologia - Soluções Inteligentes LTDA
          </p>
          <p className="mt-3 italic">CNPJ: 66.135.490/0001-41</p>
          <p className="mt-3 italic">Aracaju - SE</p>
        </div>

        <div className="border-l border-white/30 pl-5 lg:pl-8">
          <h3 className="font-bold mb-4">Contato:</h3>
          <a href="mailto:contato@corbania.com.br" className="block mt-6 lg:mt-8 italic">
            contato@corbania.com.br
          </a>
          <p className="mt-3 italic">(11) 91477-6352</p>
        </div>

        <div className="border-l border-white/30 pl-5 lg:pl-8">
          <h3 className="font-bold mb-4">Links:</h3>
          <a href="/politica-de-privacidade" className="block mt-6 lg:mt-8 italic">
            Política de Privacidade
          </a>
          <a href="/termos-de-uso" className="block mt-3 italic">
            Termos de Uso
          </a>
        </div>
      </div>
    </div>

    {/* Linha final */}
    <div className="mt-10 lg:mt-[25px] flex flex-col items-center text-center">
      <p className="text-xs md:text-sm font-extralight">
        © 2026 CORBAN IA. Todos os direitos reservados.
      </p>
    </div>
  </footer>
  );
}

export default Footer;
