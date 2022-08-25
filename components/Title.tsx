import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

// @ 타이틀 이미지는 이미지에 마우스를 올리면 Gif 이미지가 나오도록 하였습니다. public/images 교체하셔서 사용하시면 됩니다.
const titleImage = "bulsa_begin.png";

const Title: FC = () => {
  return (
    <Image
      src={`../images/${titleImage}`}
      mt={[32, 32, 8, 0]}
      w={["auto", "auto", "auto", "full"]}
      h={["100vh", "100vh", "100vh", "auto"]}
      objectFit={["none", "none", "none", "cover"]}
      alt="title"
      id="Title"
    />
  );
};

export default Title;
