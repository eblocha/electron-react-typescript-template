import React from 'react'

const Close: React.FC<React.SVGProps<SVGSVGElement>> = props => {
    return (
        <svg
            version="1.1"
            viewBox="0 0 26.458 26.458"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g fill="none" strokeWidth="2.4876">
                <path d="m0.87949 0.87944c8.2334 8.2334 16.466 16.467 24.699 24.699" />
                <path d="m25.579 0.87944c-8.2334 8.2334-16.466 16.467-24.699 24.699" />
            </g>
        </svg>
    )
}

export default Close
