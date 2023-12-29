import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt">
      <Head />
      <title>RC Lombas</title>

      <meta name="description" content="Nossa empresa oferece uma ampla gama de serviços, incluindo 
        assessoria para obtenção de alvará de funcionamento, abertura e encerramento de CNPJ, 
        declaração de imposto de renda, resoluções de malha fina, emissão de Nota Fiscal e muito mais. 
        Nosso objetivo é fornecer soluções personalizadas para simplificar sua vida e aumentar a eficiência da sua empresa." 
      />

      <meta name="keywords" content="assessoria empresarial, alvará de funcionamento, abertura de CNPJ, encerramento de CNPJ, declaração de imposto de renda, resolução de malha fina, emissão de Nota Fiscal,Negociações com a receita federal, Carne Leão, Carne Leao, serviços contábeis, consultoria financeira" />

      <meta name="author" content="RC Lombas" />

      <link rel="icon" href="/image/apple-icon-72x72.ico" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
