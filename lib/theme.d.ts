export declare const theme: {
    styles: {
        root: {
            fontSize: string;
        };
        body: {
            padding: number;
            margin: number;
        };
        h1: {
            fontFamily: string;
            color: string;
        };
        h2: {
            fontFamily: string;
            color: string;
        };
        h3: {
            fontFamily: string;
            color: string;
        };
        h4: {
            fontFamily: string;
            color: string;
        };
    };
    buttons: {
        primary: {
            color: string;
            backgroundColor: string;
            '&:focus': {
                boxShadow: string;
            };
            '&.warning': {
                color: string;
                backgroundColor: string;
                '&:focus': {
                    boxShadow: string;
                };
            };
        };
        secondary: {
            color: string;
            backgroundColor: string;
            '&:focus': {
                boxShadow: string;
            };
            '&.warning': {
                color: string;
                backgroundColor: string;
                '&:focus': {
                    boxShadow: string;
                };
            };
        };
        tertiary: {
            color: string;
            backgroundColor: string;
            '&:hover': {
                opacity: number;
                backgroundColor: string;
            };
            '&:focus': {
                boxShadow: string;
            };
            '&.warning': {
                color: string;
                '&:focus': {
                    boxShadow: string;
                };
            };
        };
        outline: {
            color: string;
            backgroundColor: string;
            '&:focus': {
                boxShadow: string;
            };
            '&.warning': {
                color: string;
                borderColor: string;
                '&:focus': {
                    boxShadow: string;
                };
            };
        };
    };
    tags: {
        primary: {
            color: string;
            backgroundColor: string;
        };
        info: {
            color: string;
            backgroundColor: string;
        };
        danger: {
            color: string;
            backgroundColor: string;
        };
        warning: {
            color: string;
            backgroundColor: string;
        };
        success: {
            color: string;
            backgroundColor: string;
        };
    };
    fonts: {
        body: string;
        heading: string;
    };
    fontSizes: string[];
    fontWeights: number[];
    lineHeights: {
        display: string;
        title: string;
        normal: string;
        text: string;
    };
    letterSpacings: {
        normal: string;
        tracked: string;
        tight: string;
        mega: string;
    };
    transitions: string[];
    margin: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
    padding: {
        xxxs: string;
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
    radii: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        full: string;
    };
    shadows: {
        sm: string;
        md: string;
        lg: string;
        disabled: string;
        inset: {
            default: string;
            active: string;
            disabled: string;
        };
        focus: {
            default: string;
            input: {
                default: string;
                warning: string;
            };
            color: string;
            primary: string;
            secondary: string;
            tertiary: string;
            warning: string;
        };
    };
    sizes: {
        default: string;
        card: string;
        wide: string;
        grid: string;
        aside: string;
    };
    opacities: {
        25: string;
        5: string;
        75: string;
    };
    colors: {
        background: string;
        backgroundSecondary: string;
        primary: string;
        secondary: string;
        accent: string;
        highlight: string;
        muted: string;
        sidebar: string;
        sidemenu: string;
        overlay: string;
        card: string;
        border: string;
        disabled: string;
        warning: string;
        button: {
            background: {
                primary: string;
                secondary: string;
                tertiary: string;
                tertiaryHover: string;
                outline: string;
                disabled: string;
            };
        };
        input: {
            background: {
                default: string;
                light: string;
                focus: string;
                disabled: string;
            };
            border: {
                default: string;
                focus: string;
            };
        };
        tag: {
            primary: string;
            danger: string;
            info: string;
            warning: string;
            success: string;
        };
        toggle: {
            background: {
                default: string;
                hover: string;
                active: string;
                disabled: string;
            };
            border: {
                default: string;
                focus: string;
                active: string;
            };
        };
        text: {
            default: string;
            secondary: string;
            bold: string;
            link: string;
            reversed: string;
            primary: string;
        };
    };
    breakpoints: string[];
    borderWidths: {
        sm: string;
        md: string;
        lg: string;
    };
    config: {
        useLocalStorage: boolean;
    };
};
