"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

type AppContextType = {
  user: any
  setUser: (user: any) => void
  theme: string
  setTheme: (theme: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null)
  const [theme, setTheme] = useState("light")

  return (
    <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider")
  }
  return context
}
