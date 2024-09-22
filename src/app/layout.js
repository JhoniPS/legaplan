import Image from "next/image";
import '../styles/globals.scss';
import Head from "./head";

export default function RootLayout({ children }) {

  const dataAtual = new Date();

  const opcoes = {
    weekday: 'long',   
    day: '2-digit',    
    month: 'long',     
    year: 'numeric'  
  };

  const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes);

  return (
    <html lang="en">
      <Head />
      <body>
        <div className="container_layout_title">
          <span className="container_logo">
            <Image
              src="/Logomark.png"
              alt="Logo do meu site"
              width={36}
              height={36}
              className="logo"
            />
            <h4>
              FocalPoint
            </h4>
          </span>

          <p className="wellcome">Bem-vindo de volta, Marcus</p>
          <p className="date">{dataFormatada}</p>
        </div>

        {children}

      </body>
    </html >
  );
}
