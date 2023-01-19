import { Text } from "@chakra-ui/react";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Yahya App</title>
      </Head>
      <main>
        <Text fontSize={"24pt"} fontWeight="semibold" textAlign="center">
          Home Page
        </Text>
      </main>
    </>
  );
};

export default Index;
