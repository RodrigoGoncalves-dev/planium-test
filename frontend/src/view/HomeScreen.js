import { useState, useEffect, useCallback } from 'react';
import api from '../plugins/axios';

export default function HomeScreen() {
  const [beneficiary, setBeneficiary] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const fetchData = useCallback(async () => {
    await api.get("/beneficiario/").then((res) => {
      setBeneficiary(res.data.resultado);
      setIsLoaded(false);
    }).catch((error) => {
      console.debug(error);
    });
  }, []);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  let imgurl = "https://camo.githubusercontent.com/be22a3d5454325d6cf6d9c1565fa3e20ed26cb064b1dac10b0e794ce31964140/68747470733a2f2f7777772e706c616e69756d2e696f2f776f726470726573732f77702d636f6e74656e742f75706c6f6164732f323031382f31312f6c6f676f2d506c616e69756d2d30362e737667"

  return (
    <div className={`bg-slate-700 ${isLoaded ? "h-screen" : "h-full"} w-full bg-cover flex justify-center`}>
      <section className="flex flex-col items-center mt-10">
        <img src={imgurl} alt="planium_logo" className="h-20 w-128" />
        {
          isLoaded ?
            <>
              <svg role="status" class="w-8 h-8 mr-2 mt-80 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </> : beneficiary.sort((a, b) => a.id_benificiario_main - b.id_benificiario_main).map((b) => {
              return (
                <div key={b.id} class="max-w-sm sm:w-96 md:w-96 lg:w-96 xl:w-96 xxsm:w-72 xsm:w-72 lg:max-w-lg mt-8 lg:flex">
                  <div class="border border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                      <p class="text-2xl text-gray-600 flex items-center">
                        {b.beneficiario_nome}
                      </p>
                      <p class="text-sm text-gray-600 flex items-center">
                        {b.idade_beneficiario < 2 ? `${b.idade_beneficiario} ano` : `${b.idade_beneficiario} anos`}
                      </p>
                      <div class="text-gray-900 text-lg mb-2">
                        Plano contratado: <span className="font-bold text-xl">{b.plano.nome}</span>
                      </div>
                      <div class="text-gray-900 mb-2">
                        Preço por benficiário: <span className="font-bold text-lg">R${b.plano.preco}</span>
                      </div>
                      <div class="text-gray-900 mb-2">
                        Preço do plano completo: <span className="font-bold text-lg">R${b.plano.precoTotal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
        }
      </section>
    </div>
  );
}