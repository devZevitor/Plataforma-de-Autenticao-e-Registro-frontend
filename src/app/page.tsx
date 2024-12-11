
export default function Home() {

  return (
    <div className="h-screen bg-[#242231] grid grid-cols-2">
      {/*Imagem*/}
      <div className="flex justify-center items-center">
        <img src="./img_cadastro.png"/>
      </div>
      {/*Formulario*/}
      <div className="flex justify-center items-center">
        <div className="bg-[#0a1029] min-h-96 w-80 flex justify-center items-center rounded-lg shadow-xl">
          <form className="flex flex-col">
            <h1 className="text-center text-2xl mb-4 mt-2 text-[#27eb93]">Cadastro de usuario</h1>
            <h5 className="text text-sm ml-4">Nome</h5>
            <input
              className="placeholder-[#8585a2] pl-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Digite seu nome"
              type="text"
              name="Nome"
            />
            <h5 className="text text-sm ml-4">Email</h5>
            <input
              className="placeholder-[#8585a2] pl-4 focus:ring-2 focus:ring-teal-500"
              placeholder="Digite seu email"
              type="text"
              name="Email"
            />
            <h5 className="text text-sm ml-4">Idade</h5>
            <input
              className="placeholder-[#8585a2] pl-4 focus:ring-2 focus:ring-teal-500"
              placeholder="Digite sua idade"
              type="number"
              name="Idade"
            />
            <h5 className="text text-sm ml-4">Senha</h5>
            <input
              className="placeholder-[#8585a2] pl-4 focus:ring-2 focus:ring-teal-500"
              placeholder="Digite sua senha"
              type="password"
              name="Senha"
            />
            <button type="submit" className="bg-[#27eb93] rounded-lg text-white mt-4 mb-2 shadow shadow-[#27eb93] px-3 py-1">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
