import '../css/app.css';
import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';



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
        console.log(props)


        {
            root.render(
                <Provider store={store}>
                    <BrowserRouter>
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
