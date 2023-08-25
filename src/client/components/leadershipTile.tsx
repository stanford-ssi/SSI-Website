import { EmailIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { InstagramIcon } from './icons/instagramIcon';
import { LinkedInIcon } from './icons/linkedInIcon';
import { TwitterIcon } from './icons/twitterIcon';
import { YoutubeIcon } from './icons/youtubeIcon';

type SocialButtonProps = React.PropsWithChildren<{
  href: string;
}>;

function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <Button
      as="a"
      href={href}
      target="_blank"
      bg="gray.900"
      rounded="2xl"
      _hover={{
        opacity: 0.8
      }}
      _active={{
        opacity: 0.6
      }}
      width="40px"
      height="40px"
      p={0}
      marginTop="5px"
      marginRight="5px"
    >
      {children}
    </Button>
  );
}

export interface LeaderInfo {
  name: string;
  position: string;
  img: string;
  email: string;
  linkedIn?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
}

export interface LeadershipTileProps {
  leader: LeaderInfo;
}

export const LeadershipTile = (props: LeadershipTileProps) => {
  const { leader } = props;
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <Box
      width="15em"
      style={{
        margin: 15,
        marginBottom: isHover ? 0 : 25,
        marginTop: isHover ? 0 : 20
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image
        src={leader.img}
        alt={leader.name}
        width="100%"
        style={{ aspectRatio: 1, objectFit: 'cover' }}
        borderRadius="20px 20px 0 0"
      />
      <Box
        backgroundColor="gray.800"
        borderRadius="0 0 20px 20px"
        padding="15px"
      >
        <Heading size="md" fontSize={'large'}>
          {leader.name}
        </Heading>
        <Text>{leader.position}</Text>
        {isHover && (
          <>
            <SocialButton href={leader.email}>
              <EmailIcon />
            </SocialButton>
            {leader.linkedIn && (
              <SocialButton href={leader.linkedIn}>
                <LinkedInIcon />
              </SocialButton>
            )}
            {leader.instagram && (
              <SocialButton href={leader.instagram}>
                <InstagramIcon />
              </SocialButton>
            )}
            {leader.twitter && (
              <SocialButton href={leader.twitter}>
                <TwitterIcon />
              </SocialButton>
            )}
            {leader.youtube && (
              <SocialButton href={leader.youtube}>
                <YoutubeIcon />
              </SocialButton>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};
