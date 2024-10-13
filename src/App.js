
import { data } from './components/data.js'


import Header from './components/header.js';
import Cards from './components/card.js';
import Footer from './components/footer.js';
import './App.css'
function App() {
    const mappedData = data.map((item) => {
        return (
            <Cards key={item.id} item={item} />
        )
    })
    return (
        <div className="App">
            <Header />
            {mappedData}
            <Footer />
        </div>
    );
}

export default App;
