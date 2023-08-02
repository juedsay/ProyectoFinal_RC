import React from 'react'

export const Header = () => {
    return (
        <nav id='header' className=''>
            <div className='w-full container nx-auto flex-wrap items-center justify-content-between mt-0 py-2'>
                <div className='logo-wrapper pl-4 flex items-center'>
                    <img src={"/"} alt="" />
                </div>
                <div className='nav-menu-wrapper flex items-center justify-between space-x-10'>
                    <div>Inicio</div>
                    <div>Menu</div>
                    <div>Acerca de</div>
                    <div>Contacto</div>
                </div>
                <div className='flex items-center justify-center space-x-4'>
                    <div>Carrito</div>
                    <div>Iniciar Sesion</div>
                    <div>Crear Cuenta</div>
                </div>
            </div>
        </nav>
    )
}
