import { FunctionComponent } from 'react';
import { PageWithLayout } from '../types/PageWithLayout';


type AppProps = {
  Component: PageWithLayout
  pageProps: any
}

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page: any) => page);
  return getLayout(<Component {...pageProps} />);
};

export default App;
