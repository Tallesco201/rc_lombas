import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt">
      <Head />
      <title>RC Lombas</title>

      <meta name="description" content="Oferecemos serviços como assessoria para alvará, 
      abertura/encerramento de CNPJ, declaração de imposto, resoluções de malha fina, emissão de Nota Fiscal
       e mais. Nosso objetivo é simplificar sua vida e aumentar a eficiência da sua empresa." />

      <meta name="keywords" content="assessoria empresarial, alvará de funcionamento, abertura de CNPJ, encerramento de CNPJ, declaração de imposto de renda, resolução de malha fina, emissão de Nota Fiscal,Negociações com a receita federal, Carne Leão, Carne Leao, serviços contábeis, consultoria financeira" />

      <meta name="author" content="RC Lombas" />

      <link rel="icon" href="/image/apple-icon-72x72.ico" />
      <link rel="canonical" href="https://rc-lombas.vercel.app/" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
