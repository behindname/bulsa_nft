import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

// @ 이미지는 public/images, 스토리 내용은 public/locales의 json 파일을 각각 수정해서 사용하시면 됩니다.
const storyImage = "bulsa_process.png";

const Story: FC = () => {
  return (
    <Flex
      minH="100vh"
      justifyContent="space-between"
      alignItems="center"
      flexDir="column"
      id="Story"
      w="full"
    >
      <Box position="relative" w="full">
        <Image src={`../images/${storyImage}`} w="full" alt="story" />
      </Box>
    </Flex>
  );
};

export default Story;
