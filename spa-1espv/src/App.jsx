import Cabecalho from "../../components/cabecalho";
import Secao from "../../components/secao";
import Rodape from "../../components/rodape";
export default function App(){

  // Area declarativa (pode declarar variavel/função/contantes/etc)

  return (
    <>
      <div>
        {/* Comentário em JSX */}
        
        {/* Criando um header */}
        <Cabecalho/>
  
        {/* Criando uma section de conteúdo */}
        <Secao/>
  
        {/* Criando um rodapé */}
        <Rodape/>
        
      </div>
    </>
  );
  
}