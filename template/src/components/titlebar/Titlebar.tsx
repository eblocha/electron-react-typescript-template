import React, { useEffect, useState } from 'react'
import './Titlebar.css'
import TitleButton from './TitleButton'

const TitleButtons: React.FC = ({ children }) => {
    return <div className="title-buttons">{children}</div>
}

const DragRegion: React.FC = ({ children }) => {
    return <div className="drag-region">{children}</div>
}

const Titlebar = () => {
    const [maximized, setMaximized] = useState(false)
    useEffect(() => {
        let rendered = true
        window.main.title.onMaximized(() => {
            if (rendered) setMaximized(true)
        })
        window.main.title.onUnMaximized(() => {
            if (rendered) setMaximized(false)
        })
        return () => {
            rendered = false
        }
    }, [])

    return (
        <div className="titlebar">
            <TitleButtons>
                <TitleButton
                    variant="minimize"
                    onClick={window.main.title.minimize}
                />
                {maximized ? (
                    <TitleButton
                        variant="restore"
                        onClick={window.main.title.restore}
                    />
                ) : (
                    <TitleButton
                        variant="maximized"
                        onClick={window.main.title.maximize}
                    />
                )}
                <TitleButton
                    variant="close"
                    onClick={window.main.title.close}
                />
            </TitleButtons>
            <DragRegion />
        </div>
    )
}

export default Titlebar
