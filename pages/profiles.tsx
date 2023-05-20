import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';


export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}

const Profiles = () => {
    const router = useRouter();
    const  { data: user } = useCurrentUser();

    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md: text-5xl text-white text-center">O que você está assistindo?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => router.push('/')}>

                        <div className="grup flex-row w-44 mx-auto">
                            <div className="
                                w-44
                                h-44
                                rounder-md
                                flex
                                items-center
                                border-2
                                border-transparent
                                group-hover:cursor-pointer
                                group-hover:border-white
                                overflow-hidden 
                            ">
                            <img src="/images/" alt="Profile" />
                            </div>
                            <div
                                className="
                                    mt-4
                                    text-gray-400
                                    text-2xl
                                    text-center
                                    group-houver:text-white
                                "                            
                            >
                                {user?.name}
                            </div>
                        </div>   

                    </div>
                </div>
                <p className=" text-white text-4xl">Profiles</p>
            </div>
            
        </div>
    )
};

export default Profiles;