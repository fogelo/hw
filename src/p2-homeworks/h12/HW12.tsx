import React from 'react';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {changeThemeAC} from './bll/themeReducer';



function HW12() {
    const themes = ['dark', 'red', 'some', 'khaki', 'blue'];
    const theme = useSelector<AppStoreType, string>(s => s.theme.theme)
    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                <h3>homeworks 12</h3>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio
                name={'theme'}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />

            <hr/>
        </div>
    );
}

export default HW12;
