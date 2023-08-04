import { Button, ButtonProps, ComponentWithAs } from '@chakra-ui/react';

export interface PrimaryButtonProps extends ButtonProps {
  dark?: boolean;
}

export const PrimaryButton: ComponentWithAs<'button', PrimaryButtonProps> = ({
  dark,
  ...props
}) => {
  return (
    <Button
      bg={dark ? 'black' : 'primary.300'}
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
