import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoggedRoutes } from './LoggedRoutes';
import { HomeScreen } from '../pages/Home';
import { LoginScreen } from '../pages/LogIn';
import { Signin } from '../pages/SignIn';
import Header from '../components/Header';
import Footer from '../components/Footer';



export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Header />
            <Routes>

                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                }
                />
                <Route path="/signin" element={
                    <PublicRoute>
                        <Signin />
                    </PublicRoute>
                }
                />

                <Route path="/*" element={
                    <PublicRoute>
                        <HomeScreen />
                    </PublicRoute>
                }
                />

                {/**
                 * En caso de requerir rutas privadas:
                 */}
                {/* <Route path="/*" element={ 
                        <PrivateRoute>
                            <LoggedRoutes />
                        </PrivateRoute>
                    } 
                /> */}

            </Routes>
            <Footer />
        </BrowserRouter>
    )
}