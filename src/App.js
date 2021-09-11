import { Container } from "react-bootstrap";
import ProductListContainer from "./containers/productListContainer";
import AddProductContainer from "./containers/addProductContainer";
import SearchContainer from "./containers/searchContainer";
import CartsListContainer from "./containers/cartsListContainer";
import NavBar from "./containers/navBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      {/* Acá debería ir el componente de NAVBAR */}
      <Container>
        <NavBar />

        <Switch>
          {/* Ruta de lista de productos */}
          <Route exact path="/">
            <ProductListContainer />
          </Route>

          {/* Ruta para agregar productos */}
          <Route exact path="/agregar-producto">
            <AddProductContainer />
          </Route>

          {/* Ruta de búsqueda de productos de productos */}
          <Route exact path="/buscador">
            <SearchContainer />
          </Route>

          {/* Ruta de búsqueda de productos de productos */}
          <Route exact path="/carritos">
            <CartsListContainer />
          </Route>

        </Switch>
        {/* Acá debería ir el componente de FOOTER */}
      </Container>
    </BrowserRouter>
  );
}

export default App;
