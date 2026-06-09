import "./Banner.css";
import Mary from "../../assets/mary-banner.png";
import Whatsapp from "../../assets/whatsapp.png";

function Banner() {
  const mensagem =
    "Olá! Estou vindo pelo site da IA do Corban e gostaria de saber mais.";

  return (
    <section className="flex items-center gap-10 justify-center">
      <div className="text-center">
        <h1 className="titulo-banner text-7xl font-bold uppercase leading-none ">
          <span className="font-light">A </span>
          <span className="font-extrabold">IA DO CORBAN</span>
          <br></br>
          <span className="font-light">ESTÁ </span>
          <span className="font-extrabold">CHEGANDO</span>
        </h1>
        <p className="paragrafo-banner mt-8 max-w-xl text-center mx-auto leading-7 uppercase">
          <span className="font-light">Desenvolvida por</span>
          <span className="font-bold"> correspondentes</span> para <br></br>
          <span className="font-bold">correspondentes</span>. Automatize 
          <span className="font-bold"> WhatsApp, Instagram,<br></br> Facebook e Messenger</span> com inteligência artificial especializada no mercado de crédito.
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
        <img className="w-150" src={Mary} alt="Mari IA" />
      </div>
    </section>
  );
}

export default Banner;
