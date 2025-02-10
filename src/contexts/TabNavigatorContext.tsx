import React, { createContext, useContext, useState } from 'react'

interface TabNavigatorContextType {
  tabHeight: number;
  setTabHeight: (height: number) => void;
}

const TabNavigatorContext = createContext<TabNavigatorContextType>({
    tabHeight: 0,
    setTabHeight: () => {},
})

export const TabNavigatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tabHeight, setTabHeight] = useState(0)

    return (
        <TabNavigatorContext.Provider value={{ tabHeight, setTabHeight }}>
            {children}
        </TabNavigatorContext.Provider>
    )
}

export const useTabNavigator = () => useContext(TabNavigatorContext) 