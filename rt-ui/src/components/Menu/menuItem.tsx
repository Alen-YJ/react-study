import * as React from 'react';
import classNames from 'classnames'
import { MenuContext,IMenuContext } from './menu'

export interface IMenuItem {
    disabled?: boolean,
    onSelect?: (chooseKey:number)=>void,
    key?: number,
    style?: React.CSSProperties,
    className?: string,
    index: number
}

const MenuItem:React.FC<IMenuItem> = (props)=>{
    const context:IMenuContext = React.useContext(MenuContext)
    const { disabled, onSelect, key, style, className, index, children } = props
    const classes = classNames(className,'menu-item',{
        disabled:disabled,
        active:context.index === index
    })
    const clickHandle = ()=>{
        console.info(context)
        if(context.onSelect && !disabled){
            context.onSelect(index)
        }
    }
    return(
        <>
            <li className={classes} style={style} key={key} onClick={ clickHandle }>
                {children}
            </li>
        </>
    )
}

export default MenuItem