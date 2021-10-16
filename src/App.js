import "./styles/App.css";
import { useAuth } from "./firebase/userAuth";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Editor from "./pages/editor";
import Viewer from "./pages/viewer";
import Loader from "./components/loader";
import Search from "./pages/search";
import { SignInPage } from "./styles/homeStyles";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const { status, signIn } = useAuth();

  return (
    <div className="App">
      {status
        ? <WhenLoggedIn />
        : (
          <WhenSignedOut signIn={signIn} />
        )}
    </div>
  );
}

function WhenLoggedIn() {
  return (
    <Router>
      <Loader />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/editor" component={Editor} />
        <Route exact path="/note/:id" component={Viewer} />
        <Route exact path="/search/:query" component={Search} />
      </Switch>
    </Router>
  )
}

function WhenSignedOut({ signIn }) {
  return (
    <SignInPage>
      <button onClick={signIn}>Sign in with Google!</button>
    </SignInPage>
  )
}


export default App;
