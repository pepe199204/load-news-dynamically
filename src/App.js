import './App.css';
import Header from './components/Header';
import Widget from './components/Widget';
import Banner from './components/Banner';
import Partner from './components/Partner';
import Ad from './components/Ad';
import Footer from './components/Footer';

const styles = {
  containerWidget: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
  }
}

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Partner></Partner>
      <div style={styles.containerWidget}>
        <Widget limit = { 7 }></Widget>
      </div>
      <Ad></Ad>
      <Footer></Footer>
    </div>
  );
};

export default App;
