import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

// @ 이미지는 public/images, 스토리 내용은 public/locales의 json 파일을 각각 수정해서 사용하시면 됩니다.
const storyImage = "bulsa_process.png";

const Story: FC = () => {
  return (
    <Image
      src={`../images/${storyImage}`}
      w="full"
      objectFit={["scale-down", "scale-down", "contain", "cover"]}
      alt="story"
      id="Story"
    />
  );
};

export default Story;
