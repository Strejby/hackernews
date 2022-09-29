import type { AppProps } from "next/app";

// Style.
import "../styles/globals.scss";

// ----- Import end -----

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
