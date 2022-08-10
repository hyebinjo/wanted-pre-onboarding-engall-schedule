import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import Add from './pages/Add';
import Schedule from './pages/Schedule';
import Layout from './Layout';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Schedule />} />
            <Route path="/add" element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
