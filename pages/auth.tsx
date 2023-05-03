import  axios from 'axios';
import { useCallback, useState } from "react";
import Input from "@/components/Input";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [ variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const register = useCallback(async() => {
        
    }, [])

    return (
        <div className="relative h-full w-full bg-[url('/images/br-pt-20230417.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/netflix_Logo_RGB.png" alt="Logo" className="h-16" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Entrar' : 'Registrar'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input 
                                    label="Username"
                                    onChange={(ev: any) => setName(ev.target.value)}
                                    id="name"
                                    value={name}
                                    />
                                )}
                            <Input 
                                label="Email"
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input 
                                label="Password"
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button className="bg-red-700 py-3 text-white rounded-md w-full mt-10 hover:bg-red-800 transition">
                            {variant === 'login' ? 'Login' : 'Entrar'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'Novo por aqui?' : 'Assine Agora.'}
                        </p>
                        <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                            {variant ==='login' ? 'Criar uma conta' : 'Login'}
                        </span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;