import Header from "../../components/Header";


export default function teste({ res }) {

    return (
        <>
          <h1>{res?.cep}</h1>
          <h1>{res?.cidade}</h1>
          <h1>{res?.logradouro}</h1>
          <h1>{res?.bairro}</h1>
          <h1>{res?.uf}</h1>
          <Header />
        </>
    )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}


export async function getStaticProps(ctx) {
    const { cep } = ctx.params;

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const res = await response.json();
    
    return {
      props: {
        res
      },
      revalidate: 10000
    }
}