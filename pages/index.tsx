import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import  {Container , Flex, Heading, SimpleGrid} from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import StakeToken from "../components/StakeToken";
import RewardToken from "../components/RewardToken";
import Stake from "../components/Stake";
const Home: NextPage = () => {
  const address = useAddress();
  if (!address) {
    return (
      <Container>
        <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
          <Heading>Connect Wallet</Heading>
        </Flex>
      </Container>
    )
  }
  return (
    <Container maxW={"1200px"}>
      <SimpleGrid columns={2} spacing={4}>
      <StakeToken/>
      <RewardToken/>
      </SimpleGrid>
      <Stake/>
    </Container>
  );
};

export default Home;
