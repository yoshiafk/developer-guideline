import { ViteReactSSG } from 'vite-react-ssg';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { routes } from './routes';

export const createRoot = ViteReactSSG(
  { routes, basename: import.meta.env.BASE_URL }
);

export default createRoot;
