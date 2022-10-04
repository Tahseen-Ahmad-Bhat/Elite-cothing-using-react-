import { Routes, Route } from "react-router-dom";
import { useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckoutItems from "./routes/checkout-items/checkout-items.component";
import { checkUserSession } from "./store/user/user.action";

import { GlobalStyle } from "./global.styles";

const App = () => {
  // redux creates a single dispatch for the whole react app which never changes
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckoutItems />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
