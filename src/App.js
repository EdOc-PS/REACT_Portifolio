import style from './App.module.sass';

import { BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Details from './components/structure/pages/page-details/details';
import Index from './components/structure/pages/index';

function Body() {
  return (
    <main className={style.main}>
         <Outlet />

    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='' element={<Body />}>
          <Route path='' element={<Index />}/>
          <Route path='/project/:name' element={<Details />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}