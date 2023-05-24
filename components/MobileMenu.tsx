import React from 'react';

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if(!visible) {
        return null;
    }

return (
    <div className='bg-black w-55 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
        <div className="flex flex-col gap-4">
            <div className="px-3 text-center text-while hover:underline">
                Home
            </div>
            <div className="px-3 text-center text-while hover:underline">
                Series
            </div>
            <div className="px-3 text-center text-while hover:underline">
                Filmes
            </div>
            <div className="px-3 text-center text-while hover:underline">
                Novo e Popular
            </div>
            <div className="px-3 text-center text-while hover:underline">
                My Lista
            </div>
            <div className="px-3 text-center text-while hover:underline">
                Linguagem
            </div>

        </div>
    </div>
    )
};

export default MobileMenu;