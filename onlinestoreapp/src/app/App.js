import { useEffect, useState } from 'react';
import Catalog from '../features/catalog/Catalog';
import '../layouts/App.css';

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://localhost:44352/api/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
  return (
      <div className="App">
          <Catalog products={products}/>
    </div>
  );
}

export default App;
