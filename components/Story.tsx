import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

// @ 이미지는 public/images, 스토리 내용은 public/locales의 json 파일을 각각 수정해서 사용하시면 됩니다.
const storyImage = "bulsa_process.png";

const Story: FC = () => {
  const { t } = useTranslation("common");

  const { colorMode } = useColorMode();

  return (
    <Flex
      minH="100vh"
      justifyContent="space-between"
      alignItems="center"
      flexDir="column"
      id="Story"
      mt={16}
      py={16}
      w="full"
    >
      <Box position="relative">
        <Image src={`../images/${storyImage}`} borderRadius="xl" alt="story" />
      </Box>
    </Flex>
  );
};

export default Story;
