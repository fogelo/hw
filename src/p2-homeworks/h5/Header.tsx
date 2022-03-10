import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.wrapper}>
            {/*// add NavLinks*/}
            <nav className={s.navbar}>
                <div className={s.navWrapper}>
                    <div className={s.nav}>
                        <div className={s.navItem}>
                            <NavLink to="pre-junior"
                                     className={({isActive}) =>
                                         isActive ? s.activeClassName : undefined
                                     }>
                                pre-junior
                            </NavLink>
                        </div>
                        <div className={s.navItem}>
                            <NavLink to="junior"
                                     className={({isActive}) =>
                                         isActive ? s.activeClassName : undefined
                                     }>
                                junior
                            </NavLink>
                        </div>
                        <div className={s.navItem}>
                            <NavLink to="junior-plus"
                                     className={({isActive}) =>
                                         isActive ? s.activeClassName : undefined
                                     }>
                                junior+
                            </NavLink>
                        </div>
                    </div>
                    <div>Menu</div>
                </div>

            </nav>
        </div>
    )
}

export default Header
