import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import Coaches from './pages/Coaches';
import Faq from './pages/Faq';
import Book from './pages/Book';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="fleet" element={<Fleet />} />
          <Route path="coaches" element={<Coaches />} />
          <Route path="faq" element={<Faq />} />
          <Route path="book" element={<Book />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
