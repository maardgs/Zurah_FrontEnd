import { ChangeEvent, useContext, useEffect, useState } from 'react'
import './Register.css'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { RotatingLines } from 'react-loader-spinner'

function Register() {

  let navigate = useNavigate()

  const {isLoading} = useContext(AuthContext);

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    name: "",
    usuario: "",
    password: "",
    photo: "",
    is_seller: 1,
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    name: "",
    usuario: "",
    password: "",
    photo: "",
    is_seller: 1,
  })

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstadoInput(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  function atualizarEstadoSelect(e: ChangeEvent<HTMLSelectElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
    setIsDisabled(true);
  }


  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.password && usuario.password.length >= 8) {
      try {
        await cadastrarUsuario(`/usuarios/register`, usuario, setUsuarioResposta)
        alert('Usuário cadastrado com sucesso')
      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }
    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({ ...usuario, password: "" })
      setConfirmaSenha("")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-12 bg-[#FAEBD7]">
        <div className="flex bg-[#FFF] rounded-lg shadow-lg overflow-hidden w-full sm:w-3/4">
            <div className="hidden lg:block lg:w-1/2 bg-cover"
                style={{ backgroundImage: "url('https://blog.7mboots.com.br/wp-content/uploads/2021/01/working-on-plantation-UJ9W6ZA-scaled.jpg')" }}>
            </div>
            <div className=" w-full p-8 lg:w-1/2">
                <img src="https://i.imgur.com/KIEEiTe.png" alt="" className="h-auto w-[150px] mx-auto"/>
                <p className="text-xl text-gray-600 text-center mt-4 mb-8">Seja bem-vindo!</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                    <p className="text-xs text-center text-gray-500 uppercase">faça seu cadastro abaixo</p>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <form action="" onSubmit={cadastrarNovoUsuario}>
                      <div className="mt-4">
                              <label className="block text-green-900 text-sm font-bold mb-2" htmlFor='name'>Nome</label>
                              <input placeholder='Nome completo' className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" required 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstadoInput(e)} value={usuario.name} id="nome" name="name"/>
                    </div>
                    <div className="mt-4">
                        <label className="block text-green-900 text-sm font-bold mb-2" htmlFor='usuario'>E-mail</label>
                        <input placeholder='E-mail' id="usuario" value={usuario.usuario} name="usuario" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" required 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstadoInput(e)}/>
                    </div>
                    
                    <div className="mt-4">
                      <label className="block text-green-900 text-sm font-bold mb-2" htmlFor="isSeller">Tipo de usuário</label>
                      <select name="is_seller" id="isSeller" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full" onChange={atualizarEstadoSelect}>
                        <option value="" className='text-gray-500' disabled={isDisabled}>Selecione uma opção</option>
                        <option value="1">Vendedor</option>
                        <option value="0">Comprador</option>
                      </select>
                    </div>

                    <div className="mt-4">
                    <label htmlFor="foto" className='block text-green-900 text-sm font-bold mb-2'>Foto</label>
                    <input
                      type="text"
                      id="foto"
                      name="photo"
                      value={usuario.photo} 
                      onChange={atualizarEstadoInput}
                      placeholder="URL da Foto"
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    />
                  </div>

                  <div className="mt-4">
                      <label htmlFor="senha" className="block text-green-900 text-sm font-bold mb-2">Senha</label>
                      <input
                        type="password"
                        id="senha"
                        name="password"
                        value={usuario.password} 
                        onChange={atualizarEstadoInput}
                        placeholder="Senha"
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      />
                  </div>
                  <div className="mt-4">
                      <label htmlFor="confirmarSenha" className="block text-green-900 text-sm font-bold mb-2">Confirmar Senha</label>
                      <input
                        type="password"
                        id="confirmarSenha"
                        name="confirmarSenha"
                        value={confirmaSenha} 
                        onChange={handleConfirmarSenha}
                        placeholder="Repita a senha"
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      />
                  </div>
                    <div className="m-8 flex justify-center">
                        <button className="font-bold py-2 px-4 w-56 text-white bg-green-500 rounded-md hover:bg-green-700 flex justify-center">
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Cadastrar</span>}
                        </button>
                    </div>
                </form>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <Link to={'/login'} className="text-xs text-green-900 hover:text-green-500 uppercase">Ou faça login</Link>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
