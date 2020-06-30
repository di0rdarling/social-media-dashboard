import React, { useEffect } from 'react';

export interface Theme {
    backgroundColour: string;
    dataContainerBackgroundColour: string;
    primaryTextColor: string;
    secondaryTextColor: string;
}

let lightTheme: Theme = {
    backgroundColour: '#FFFFFF',
    dataContainerBackgroundColour: '#F0F2FA',
    primaryTextColor: 'black',
    secondaryTextColor: 'gray'
}

let darkTheme: Theme = {
    backgroundColour: '#1E202A',
    dataContainerBackgroundColour: '#252A41',
    primaryTextColor: 'white',
    secondaryTextColor: '#8B97C6'
}

export type ThemeAction =
    | { type: 'set theme'; payload: Theme }
    | { type: 'toggle dark mode'; active: boolean }

export type ThemeDispatch = (action: ThemeAction) => void;

const ThemeStateContext = React.createContext<Theme | undefined>(undefined);
const ThemeDispatchContext = React.createContext<ThemeDispatch | undefined>(undefined);

function themeReducer(state: Theme, action: ThemeAction) {

    switch (action.type) {
        case 'set theme':
            return action.payload;
        case 'toggle dark mode':
            if (action.active) {
                return darkTheme;
            } else {
                return lightTheme;
            }
    }
}

interface ThemeProviderProps {
    children: React.ReactFragment;
}

export function ThemeProvider(props: ThemeProviderProps) {

    const [state, dispatch] = React.useReducer(themeReducer, {} as Theme);

    useEffect(() => {
        dispatch({
            type: 'set theme',
            payload: lightTheme
        })
    }, [])

    return (
        <ThemeStateContext.Provider value={state}>
            <ThemeDispatchContext.Provider value={dispatch}>
                {props.children}
            </ThemeDispatchContext.Provider>
        </ThemeStateContext.Provider>
    )

}

export function useThemeState() {
    const context = React.useContext(ThemeStateContext)
    if (context === undefined) {
        throw new Error('useThemeState must be used within a ThemeProvider')
    }
    return context
}

export function useThemeDispatch() {
    const context = React.useContext(ThemeDispatchContext)
    if (context === undefined) {
        throw new Error('useThemeDispatch must be used within a ThemeProvider')
    }
    return context
}