import { Button, ButtonProps, ComponentWithAs } from '@chakra-ui/react';
import { primaryGradient } from 'client/theme';

export interface PrimaryButtonProps extends ButtonProps {
  dark?: boolean;
}

export const PrimaryButton: ComponentWithAs<'button', PrimaryButtonProps> = ({
  dark,
  ...props
}) => {
  return (
    <Button
      bgGradient={dark ? undefined : primaryGradient}
      bg={dark ? 'black' : undefined}
      _hover={{
        opacity: 0.8
      }}
      _active={{
        opacity: 0.6
      }}
      size="lg"
      {...props}
    />
  );
};
