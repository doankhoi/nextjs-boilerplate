import { store } from '@/app/store';
import { theme } from '@/theme';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
