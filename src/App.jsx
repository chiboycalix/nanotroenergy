import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, About, Products, ContactUs, Solutions } from './pages';
import { Header } from './Sections';
import { AppWrapper, AppHeaderWrapper} from './app.styles'


const App = () => {
  return (
    <AppWrapper>
      <BrowserRouter>
        <AppHeaderWrapper>
          <Header />
        </AppHeaderWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/solutions" component={Solutions} />
      </Switch>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
