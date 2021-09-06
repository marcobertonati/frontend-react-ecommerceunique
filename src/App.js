import { Container } from "react-bootstrap";
import ProductListContainer from "./containers/productListContainer";
import AddProductContainer from "./containers/addProductContainer";
import SearchContainer from "./containers/searchContainer";
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

          {/* Ruta de lista de productos */}
          <Route exact path="/agregar-producto">
            <AddProductContainer />
          </Route>

          {/* Ruta de lista de productos */}
          <Route exact path="/buscador">
            <SearchContainer />
          </Route>
        </Switch>
        {/* Acá debería ir el componente de FOOTER */}
      </Container>
    </BrowserRouter>
  );
}

export default App;
