import { Button, ButtonProps, ComponentWithAs } from '@chakra-ui/react';
import { primaryGradient } from 'client/theme';

export interface PrimaryButtonProps extends ButtonProps {
  dark?: boolean;
}

export const PrimaryButton: ComponentWithAs<'button', PrimaryButtonProps> = (
  props
) => {
  return (
    <Button
      bgGradient={props.dark ? undefined : primaryGradient}
      bg={props.dark ? 'black' : undefined}
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
