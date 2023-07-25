import { Provider } from 'react-redux';
import store from '../store/store';
import '../styles/globals.css'
import '../styles/font.css'
const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;