import { Container } from "react-bootstrap";
import ProductListContainer from "./containers/productListContainer";
import AddProductContainer from "./containers/addProductContainer";
import SearchContainer from "./containers/searchContainer";
import CartsListContainer from "./containers/cartsListContainer";
import NavBar from "./containers/navBar";
import ChatContainer from "./containers/chatContainer";
import LoginContainer from "./containers/loginContainer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import InputChatContainer from "./containers/inputChatContainer";

function App() {
  return (
    <BrowserRouter>
      {/* Acá debería ir el componente de NAVBAR */}
      <Container>
        <LoginContainer />
        
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

          {/* Ruta de búsqueda de productos de productos */}
          <Route exact path="/chat">
            <InputChatContainer />
            <ChatContainer />
          </Route>

        </Switch>
        {/* Acá debería ir el componente de FOOTER */}
      </Container>
    </BrowserRouter>
  );
}

export default App;
