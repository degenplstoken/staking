import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "pulsechain";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={{// === Required information for connecting to the network === \\
        chainId: 369, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: [" https://scan.pulsechain.com/api "],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "PulseChain Mainet",
          symbol: "PLS",
        },
        shortName: "pulsechain", // Display value shown in the wallet UI
        slug: "pulsechain", // Display value shown in the wallet UI
        testnet: false, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "pulsechain", // Name of the network
        name: "PulseChain Mainet", // Name of the network
}}
    ><ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
