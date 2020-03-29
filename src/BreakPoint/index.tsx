import React from 'react'
import { ResponsiveMapping, ResponsiveMappingFunctor } from '../Grid/types';
import { MinWidthPx } from './types'

const defaultQueries: ResponsiveMapping<MinWidthPx> = {
  xs: new MinWidthPx(0),
  sm: new MinWidthPx(600),
  md: new MinWidthPx(960),
  lg: new MinWidthPx(1280),
  xl: new MinWidthPx(1920),
}

const BreakpointContext: React.Context<string> = React.createContext('xs');

type BreakpointProviderProps = {
  queries?: ResponsiveMapping<MinWidthPx>
}

const safeKeys = <T extends {}>(x: T) => Object.keys(x) as Array<keyof T>

const BreakpointProvider: React.FC<BreakpointProviderProps> = ({children, queries = defaultQueries}) => {
    const [queryMatch, setQueryMatch] = React.useState<ResponsiveMappingFunctor<boolean> | null>(null);
    const queryStrings = new ResponsiveMappingFunctor(queries).map(String);

    React.useEffect(() => {
        if (!window || !window.matchMedia) {
          return;
        }

        const mediaQueryLists = queryStrings.map(window.matchMedia);
    
        const handleQueryListener = () => {
          const updatedMatches = mediaQueryLists.map(({ matches }) => matches)
          setQueryMatch(updatedMatches)
        }
    
        const matches = mediaQueryLists.map((mediaQuery) => {
          mediaQuery.addListener(handleQueryListener);
          return mediaQuery.matches;
        });
        setQueryMatch(matches);
    
        return () => {
            mediaQueryLists.map(mediaQuery => mediaQuery.removeListener(handleQueryListener))
        }
      }, [queries, queryStrings]);

    const keys = queryMatch !== null ? safeKeys(queryMatch.value) : [];
    const value = keys.reduce((acc,key) => {
      return queryMatch !== null && queryMatch.value[key] ? key : acc;
    }, "xs")

    return (
      <BreakpointContext.Provider value={value}>
        {children}
      </BreakpointContext.Provider>
    );
}

function useBreakpoint() {
    const context = React.useContext(BreakpointContext);
    // TODO: Need to hae a no Provider state
    // if(context === {}) {
    //     throw new Error('useBreakpoint must be used within BreakpointProvider');
    // }
    return context;
}

export { useBreakpoint, BreakpointProvider };