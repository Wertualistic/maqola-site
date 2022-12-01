import Header from './Header';
import '../Styles/style.css';
import Section1 from './Section1';
import Cards from './Cards';
import Comments from './Comments';

function Desktop3() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Cards />
      <Comments />
    </div>
  );
}

export default Desktop3;