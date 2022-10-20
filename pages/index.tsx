import type { NextPage } from 'next';

import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='w-full min-h-screen bg-darkblue'>
        <nav className='h-20 flex justify-center bg-lightblue text-white'>
          <ul className='w-full  px-4 max-w-7xl justify-between items-center h-full flex'>
            <li className='flex items-center'>
              <i className=' text-white text-5xl fa-solid fa-building-columns'></i>
              <span className='tracking-tighter font-semibold text-white text-3xl ml-2'>
                PayTime
              </span>
            </li>
            <li>Inicio</li>
            <li>Funcionalidades</li>
            <li>
              <button className='bg-darkblue rounded-md px-4 py-2 font-semibold hover:bg-darkblue/75'>
                <i className='fa-solid fa-right-to-bracket mr-2'></i> Iniciar Sesión
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
