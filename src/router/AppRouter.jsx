import { Route, Routes } from "react-router-dom"

import { HeroesRoutes } from "../modules/heroes/"
import { Login } from "../modules/auth"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<Login />} />
            
            <Route path="/*" element={<HeroesRoutes />} />
        </Routes>
    </>
  )
}
