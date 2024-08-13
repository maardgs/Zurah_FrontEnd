
function Login() {

    
  return (
    <div className="flex items-center justify-center min-h-[80vh] p-12 bg-gray-100">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-3/4">
            <div className="hidden lg:block lg:w-1/2 bg-cover"
                style={{ backgroundImage: "url('https://blog.7mboots.com.br/wp-content/uploads/2021/01/working-on-plantation-UJ9W6ZA-scaled.jpg')" }}>
            </div>
            <div className="w-full p-8 lg:w-1/2">
                <h2 className="text-6xl font-semibold text-green-900 text-center">Zurah</h2>
                <p className="text-xl text-gray-600 text-center mt-4 mb-8">Bem vindo de volta!</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                    <p className="text-xs text-center text-gray-500 uppercase">faça o login com e-mail</p>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <div className="mt-4">
                    <label className="block text-green-900 text-sm font-bold mb-2">E-mail</label>
                    <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" required/>
                </div>
                <div className="mt-4">
                    <label className="block text-green-900 text-sm font-bold mb-2">Senha</label>
                    <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" required/>
                </div>
                <div className="flex justify-between mt-3">
                  <label className="inline-flex items-center text-xs text-gray-500">
                      <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4"/>
                      <span className="ml-2">Lembrar de mim</span>
                  </label>
                  <a href="#" className="text-xs text-green-900 hover:text-green-500">Esqueceu a senha?</a>
                </div>
                <div className="m-8 flex justify-center">
                    <button className="font-bold py-2 px-4 w-56 text-white bg-green-500 rounded-md hover:bg-green-700">Entrar</button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <a href="#" className="text-xs text-green-900 hover:text-green-500 uppercase">Ou Cadastrar-se</a>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
