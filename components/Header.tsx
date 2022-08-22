import { FC } from "react";
import { useRouter } from "next/router";
import { Box, Button, Flex, Image, useColorMode } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";
import Link from "next/link";

// @ 로고 이미지는 public/images를 교체하시면 됩니다. URL은 우리 프로젝트의 URL을 작성하시면 됩니다.
const logoImage = "logo_black.png";
const logoImageDark = "logo_white.png";
const openseaURL = "https://opensea.io/Bulsa-Project";
const instagramURL = "https://www.instagram.com/irag.jo/";

const Header: FC = () => {
  const scrollLink = ["Title", "Story", "Mint", "Team"];

  const router = useRouter();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      position="fixed"
      w="100%"
      top="0"
      justifyContent="space-between"
      alignItems="center"
      px={8}
      shadow="md"
      zIndex={1}
      flexDir={["column", "column", "row"]}
    >
      <Box fontWeight="bold" fontSize="lg" cursor="pointer">
        <Link href="/">
          <Image
            w={200}
            src={
              colorMode === "light"
                ? `../images/${logoImage}`
                : `../images/${logoImageDark}`
            }
            alt="LOGO"
          />
        </Link>
      </Box>
      <Box>
        {scrollLink.map((v, i) => {
          return (
            <ScrollLink key={i} to={v} spy={true} smooth={true}>
              <Button variant="ghost" mx={[8, 8, 8]} size={["xs", "sm", "md"]}>
                {v}
              </Button>
            </ScrollLink>
          );
        })}
      </Box>
      <Flex alignItems="center" my={[4, 4, 0]}>
        <a href={openseaURL} target="_blank" rel="noreferrer">
          <Button variant="ghost" size={["xs", "xs", "sm"]}>
            <Image src="../images/opensea.png" alt="opensea" w={6} />
          </Button>
        </a>
        <a href={instagramURL}>
          <Button variant="ghost" size={["xs", "xs", "sm"]}>
            <FaInstagram size={24} />
          </Button>
        </a>
        <Box onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <Button variant="ghost" size={["xs", "xs", "sm"]}>
              <IoMoon size={24} />
            </Button>
          ) : (
            <Button variant="ghost" size={["xs", "xs", "sm"]}>
              <IoSunny size={24} />
            </Button>
          )}
        </Box>
        <Box>
          <Link
            href={router.asPath}
            locale={router.locale === "en" ? "ko" : "en"}
          >
            <Button variant="ghost" size={["xs", "xs", "sm"]}>
              {router.locale === "en" ? "EN" : "KO"}
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
