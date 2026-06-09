import "./Banner.css";
import Mary from "../../assets/mary-banner.png";
import Whatsapp from "../../assets/whatsapp.png";

function Banner() {
  const mensagem =
    "Olá! Estou vindo pelo site da IA do Corban e gostaria de saber mais.";

  return (
    <section className="flex flex-col items-center gap-4 px-6 md:flex-row lg:gap-10">
      <div className="text-center md:w-1/2">
        <h1 className="titulo-banner mt-10 text-3xl md:text-5xl lg:text-6xl lg:mt-6 font-bold uppercase leading-none ">
          <span className="font-light">A </span>
          <span className="font-extrabold">IA DO CORBAN</span>
          <br></br>
          <span className="font-light">ESTÁ </span>
          <span className="font-extrabold">CHEGANDO</span>
        </h1>
        <p
          className="paragrafo-banner mt-10 max-w-xs text-center mx-auto leading-5 uppercase md:max-w-md md:leading-6 lg:max-w-xl lg:leading-7"
        >
          <span className="font-light">Desenvolvida por</span>
          <span className="font-bold"> correspondentes</span> para
          <span className="font-bold">correspondentes</span>. Automatize
          <span className="font-bold">
            {" "}
            WhatsApp, Instagram, Facebook e Messenger
          </span>{" "}
          com inteligência artificial especializada no mercado de crédito.
        </p>
        <a
          href={`https://wa.me/5511914776352?text=${encodeURIComponent(mensagem)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-corban botao-whatsapp inline-flex items-center gap-4 px-5 py-2 rounded-2xl text-white mt-12 text-center"
        >
          <img src={Whatsapp} alt="WhatsApp" className="w-12 h-12" />
          Conhecer a IA
        </a>
        <p className="paragrafo-banner text-sm mt-8 italic">
          Criada por especialistas do mercado de crédito
        </p>
      </div>
      <div>
        <img
          className=" w-[307px]
    md:w-[350px]
    lg:w-[600px]"
          src={Mary}
          alt="Mari IA"
        />
      </div>
    </section>
  );
}

export default Banner;
