import {Card, Heading, Skeleton, Stack, Text} from "@chakra-ui/react";
import {useAddress, useContract, useTokenBalance} from "@thirdweb-dev/react";
import {REWARD_TOKEN_ADDRESSES} from "../constants/addresses";

export default function RewardToken() {
    const address = useAddress();
    const {contract: RewardTokenContract, isLoading: loadingRewardToken} = useContract(REWARD_TOKEN_ADDRESSES);
    const {data: tokenBalance, isLoading: loadingTokenBalance} = useTokenBalance(RewardTokenContract, address);


return(
    <Card p={5}>
        <Stack>
            <Heading>0xD Token</Heading>
            <Skeleton h={4} w={"50"} isLoaded={!loadingRewardToken && !loadingTokenBalance}>
                <Text fontSize={"large"} fontWeight={"bold"}>${tokenBalance?.symbol}</Text>
            </Skeleton>
            <Skeleton h={4} w={"50"} isLoaded={!loadingRewardToken && !loadingTokenBalance}>
                <Text>${tokenBalance?.displayValue}</Text>
            </Skeleton>
        </Stack>
    </Card>

)

}