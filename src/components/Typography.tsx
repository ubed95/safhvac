import React, { PropsWithChildren } from 'react'

type TypographyType = {
    h1: React.FC<PropsWithChildren & { className?: string }>,
    h2: React.FC<PropsWithChildren & { className?: string }>,
    h3: React.FC<PropsWithChildren & { className?: string }>,
    h4: React.FC<PropsWithChildren & { className?: string }>,
    h5: React.FC<PropsWithChildren & { className?: string }>,
    h6: React.FC<PropsWithChildren & { className?: string }>,
    p: React.FC<PropsWithChildren & { className?: string }>
}

const H1: React.FC<PropsWithChildren &  { className?: string }> = ({ children, className }) => {
    return <h1 className={`text-4xl lg:text-6xl text-secondary ${className}`}>{children}</h1>
}

const H2: React.FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
    return <h2 className={`text-3xl lg:text-4xl text-black ${className}`}>{children}</h2>
}

const H3: React.FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
    return <h3 className={`text-xl lg:text-2xl text-secondary ${className}`}>{children}</h3>
}

const H4: React.FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
    return <h4 className={`text-lg lg:text-xl ${className}`}>{children}</h4>
}

const H5: React.FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
    return <h5 className={`text-4xl lg:text-6xl text-secondary ${className}`}>{children}</h5>
}

const H6: React.FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
    return <h6 className={`text-4xl lg:text-6xl text-secondary ${className}`}>{children}</h6>
}

const P: React.FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
    return <p className={`text-lg ${className}`}>{children}</p>
}


const Typography: TypographyType = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P
}

export default Typography