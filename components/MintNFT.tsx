import { Box, Button, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { FC } from "react";

// @ 이미지는 public/images, 스토리 내용은 public/locales의 json 파일을 각각 수정해서 사용하시면 됩니다.
const mintImage = "watermoon_avalokitesvara.jpeg";

const MintNFT: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Flex
      minH="100vh"
      justifyContent="space-between"
      alignItems="center"
      flexDir="column"
      id="Mint"
      w="full"
      py={"16"}
      bg="green.100"
    >
      <Box fontSize="6xl" fontWeight="bold">
        {t("avalokitesvara")}
      </Box>
      <Box position="relative">
        <Image src={`../images/${mintImage}`} maxH="72vh" alt="story" />
      </Box>
      <Box py={5}>
        <Link href={"/minting"}>
          <Button colorScheme="teal" p={4} size="4xl">
            Minting
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default MintNFT;
