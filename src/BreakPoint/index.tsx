import React from 'react'
import { ResponsiveMapping, ResponsiveMappingFunctor } from '../Grid/types';
import { MaxWidthPx } from './types'

const defaultValue = {}

const defaultQueries: ResponsiveMapping<MaxWidthPx> = {
  xs: new MaxWidthPx(600),
  sm: new MaxWidthPx(960),
  md: new MaxWidthPx(1280),
  lg: new MaxWidthPx(1920),
}

const BreakpointContext: React.Context<ResponsiveMapping<boolean> | {}> = React.createContext(defaultValue);

type BreakpointProviderProps = {
  queries?: ResponsiveMapping<MaxWidthPx>
}

const BreakpointProvider: React.FC<BreakpointProviderProps> = ({children, queries = defaultQueries}) => {
    const [queryMatch, setQueryMatch] = React.useState<ResponsiveMappingFunctor<boolean> | null>(null);
    const functor = new ResponsiveMappingFunctor(queries).map(String);
    const formattedQueries = functor.value;

    React.useEffect(() => {
        if (!window || !window.matchMedia) {
          return;
        }

        const mediaQueryLists = functor.map(window.matchMedia);
        let isAttached = false;
    
        const handleQueryListener = () => {
          const updatedMatches = mediaQueryLists.map(({ matches }) => matches)
          setQueryMatch(updatedMatches)
        }
    
        const matches = mediaQueryLists.map(({ matches }) => matches);
        setQueryMatch(matches);
        isAttached = true;
        mediaQueryLists.map(mediaQuery => mediaQuery.addListener(handleQueryListener))
    
        return () => {
          if(isAttached) {
            mediaQueryLists.map(mediaQuery => mediaQuery.removeListener(handleQueryListener))
          }
        }
      }, [queries]);

    return (
      <BreakpointContext.Provider value={queryMatch || {}}>
        {children}
      </BreakpointContext.Provider>
    );
}

function useBreakpoint() {
    const context = React.useContext(BreakpointContext);
    if(context === {}) {
        throw new Error('useBreakpoint must be used within BreakpointProvider');
    }
    return context;
}

export { useBreakpoint, BreakpointProvider };