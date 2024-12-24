import '../css/app.css';
import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Custom/Header';
import ShowAfishaInfo from './Pages/ShowAfishaInfo';
import FetchEachEvent from './Components/Custom/FetchEachEvent';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        {
            root.render(
                <Provider store={store}>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route exact path="/spb" element={<ShowAfishaInfo city={'spb'} />} />
                            <Route path="/msk" element={<ShowAfishaInfo city={'msk'} />} />
                            <Route path="/krd" element={<ShowAfishaInfo city={'krd'} />} />
                            <Route path="/sochi" element={<ShowAfishaInfo city={'sochi'} />} />
                            <Route path="/spb/:id" element={<FetchEachEvent />} />
                            <Route path="/msk/:id" element={<FetchEachEvent />} />
                            <Route path="/krd/:id" element={<FetchEachEvent />} />
                            <Route path="/sochi/:id" element={<FetchEachEvent />} />
                        </Routes>
                        <App {...props} />
                    </BrowserRouter>
                </Provider>
            )
        }

    },
    progress: {
        color: '#4B5563',
    },
});
