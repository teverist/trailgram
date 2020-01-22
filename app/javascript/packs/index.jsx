import { HashRouter } from 'react-router-dom';
import App from '../components/App';

const Index = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);

export default Index;