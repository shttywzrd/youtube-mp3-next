import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store";
import Index from "../components/layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <Index>
      <Component {...pageProps} />
    </Index>
  );
}

export default wrapper.withRedux(App);
