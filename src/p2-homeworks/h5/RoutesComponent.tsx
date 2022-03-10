import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';
import Junior from './pages/Junior';
export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function RoutesComponent() {

    return (
        <div>
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                {/*<Route path={'/'}  element={<Redirect to={PATH.PRE_JUNIOR}/>}/>*/}
                {/*<Route element={<Navigate to="/" />} />*/}
                <Route
                    path="/"
                    element={<Navigate to={PATH.PRE_JUNIOR} />}
                />
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={'/junior'} element={<Junior/>}/>

                {/*// add routes*/}

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </div>
    )
}
export default RoutesComponent
