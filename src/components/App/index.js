import './style.css';
import Header from '../Header';
import Footer from '../Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage';
import ProductPage from '../ProductPage';
import ErrorProductPage from '../ErrorProductPage';

function App() {
  return (
    <div className="App">
      <main className="main">
		    <div className="container">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/restaurant/:products" exact component={ProductPage}/>
              <Route path="/error-product-list" component={ErrorProductPage} />
              <Route render={() => <h2>Error page</h2>}/>
            </Switch>
            <Footer />
          </Router>
        </div>
      </main>
    </div>
  );
}

export default App;
