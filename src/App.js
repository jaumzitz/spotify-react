import './App.css';
import './reset.css';
import './vars.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Playlist from './Playlist/Playlist';

//import './search.js';



function App() {
  return (
  <>
    <head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/solid.css"/>
    </head>

    <Sidebar></Sidebar>
      
    <main className='main-container'>
      <Header></Header>
      <Playlist></Playlist>
    </main>

    <Footer></Footer>
  </>);
}

export default App;
