import React from 'react'
import Close from '../../icons/titlebar/Close'
import Maximize from '../../icons/titlebar/Maximize'
import Minimize from '../../icons/titlebar/Minimize'
import Restore from '../../icons/titlebar/Restore'
import './TitleButton.css'

type IProps = {
    variant: 'close' | 'minimize' | 'maximized' | 'restore'
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const TitleButton: React.FC<IProps> = props => {
    let Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

    switch (props.variant) {
        case 'close':
            Icon = Close
            break
        case 'minimize':
            Icon = Minimize
            break
        case 'maximized':
            Icon = Maximize
            break
        case 'restore':
            Icon = Restore
            break
    }
    return (
        <div className="title-button" onClick={props.onClick}>
            {Icon ? <Icon style={{ height: '10px' }} /> : props.children}
        </div>
    )
}

export default TitleButton
