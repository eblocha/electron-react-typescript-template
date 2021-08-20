import React from 'react'

const Restore: React.FC<React.SVGProps<SVGSVGElement>> = props => {
    return (
        <svg
            version="1.1"
            viewBox="0 0 26.458 26.458"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g fill="none">
                <path
                    transform="scale(.26458)"
                    d="m25.043 5.043v20h49.914v49.914h20v-69.914h-69.914z"
                    strokeWidth="10.085"
                />
                <rect
                    x="11.392"
                    y="-39.654"
                    width="1.9711"
                    height="14.785"
                    strokeWidth="0"
                />
                <rect
                    x="1.3342"
                    y="6.6258"
                    width="18.498"
                    height="18.498"
                    strokeWidth="2.6683"
                />
            </g>
        </svg>
    )
}

export default Restore
