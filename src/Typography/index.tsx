import React from 'react';

type VariantKind = "p" | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1' 

// TODO: Memoization Function with this being defaults
// TODO: REM CLASS
const DEFAULT_THEME: Record<VariantKind, { fontSize: string, fontFamily: string, fontWeight: number }> = {
    p: {
        fontSize: "0.75rem",
        fontFamily: "'Roboto Mono', monospace",
        fontWeight: 400,
    },
    "h6": {
        fontSize: "1rem",
        fontFamily: "'Roboto Mono', monospace",
        fontWeight: 400,
    },
    "h5": {
        fontSize: "1.25rem",
        fontFamily: "'Roboto Mono', monospace",
        fontWeight: 400,
    },
    "h4": {
        fontSize: "1.5rem",
        fontFamily: "'Roboto Mono', monospace",
        fontWeight: 500,
    },
    "h3": {
        fontSize: "2rem",
        fontFamily: "'Roboto Mono', monospace",
        fontWeight: 500,
    },
    "h2": {
        fontSize: "2.25rem",
        fontFamily: "'Roboto Mono', monospace",
        fontWeight: 500,
    },
    "h1": {
        fontSize: "2.5rem",
        fontFamily: "'Roboto Mono', monospace",
        fontWeight: 700,
    },
}

type TypogaphyProps = {
    variant?: VariantKind;
}

const Typography: React.FC<TypogaphyProps> = ({variant = 'p', ...rest}) => {

    return React.createElement(variant, { style: DEFAULT_THEME[variant],  ...rest});
}

export { Typography }