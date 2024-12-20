    "use client"

    import { useState } from "react";
    import api from "@/Api/api";
    import { AxiosError } from "axios";
    import { useRouter } from "next/navigation";


    export default function Perfil() {

        const router = useRouter();
        const [email, setEmail]     = useState("");
        const [senha, setSenha]     = useState("");
        const [message, setMessage] = useState("");

       

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            try {
                const response = await api.post("http://localhost:3333/usuarioLogin", {
                email,
                senha,
                })

                setMessage("Login feito com sucesso")
                setEmail("");
                setSenha("");

                
              if (response.data.success) {
                const userId = response.data.data.id; 
                console.log("ID do usuário logado:", userId);

                router.push(`/perfil/${userId}`);
              }
                               

            } catch (err){
                if (err instanceof AxiosError) {
                if (err.response) {
                    setMessage(`Senha ou email invalidos: ${err.response.data?.message || err.response.statusText}`);
                } else if (err.request) {
                    setMessage("Erro ao conectar com o backend. Verifique sua conexão.");
                } else {
                    setMessage(`Erro desconhecido: ${err.message}`);
                }
                } else {
                setMessage("Erro desconhecido.");
                }
            }
        }

        return (
            <div className="h-screen bg-[#242231] grid grid-cols-2">
              {/*Imagem*/}
              <div className="flex justify-center items-center">
                <img src="./img_cadastro.png" />
              </div>
              {/*Formulario*/}
              <div className="flex justify-center items-center">
                <div className="bg-[#0a1029] min-h-96 w-80 flex justify-center items-center rounded-lg shadow-xl">
                  <form className="flex flex-col" onSubmit={handleSubmit}>
                    <h1 className="text-center text-2xl mb-4 mt-2 text-[#27eb93]">Login</h1>


                    {message && (
                        <p
                            className={`text-center text-sm mb-2 ${
                            message.includes("sucesso")
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                        >
                            {message}
                        </p>
                    )}
               
                    <h5 className="text text-sm ml-4">Email</h5>
                    <input
                      className="placeholder-[#8585a2] pl-4 focus:ring-2 focus:ring-teal-500"
                      placeholder="Digite seu email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5 className="text text-sm ml-4">Senha</h5>
                    <input
                      className="placeholder-[#8585a2] pl-4 focus:ring-2 focus:ring-teal-500"
                      placeholder="Digite sua senha"
                      type="password"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
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