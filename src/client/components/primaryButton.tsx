import { Button, ButtonProps, ComponentWithAs } from '@chakra-ui/react';
import { primaryGradient } from 'client/theme';

export type PrimaryButtonProps = ComponentWithAs<'button', ButtonProps>;

export const PrimaryButton: ComponentWithAs<'button', ButtonProps> = (
  props
) => {
  return (
    <Button
      bgGradient={primaryGradient}
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
