import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "arbitrum";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={{// === Required information for connecting to the network === \\
        chainId: 42161, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["https://rpc.arb1.arbitrum.gateway.fm"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "Arbitrum One",
          symbol: "ARB",
        },
        shortName: "arbitrum", // Display value shown in the wallet UI
        slug: "arbitrum", // Display value shown in the wallet UI
        testnet: false, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "arbitrum", // Name of the network
        name: "Arbitrum One", // Name of the network
}}
    ><ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
