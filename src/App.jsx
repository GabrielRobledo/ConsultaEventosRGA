import { Routes, Route } from 'react-router-dom';
import BasicLayout from './components/layout';
import Tabla from './components/tabla'
import CargarExcelYMostrarTabla from './components/cargarExcel'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<CargarExcelYMostrarTabla />} />
        {/* Puedes añadir más rutas aquí en el futuro */}
      </Route>
    </Routes>
  );
};

export default App;
