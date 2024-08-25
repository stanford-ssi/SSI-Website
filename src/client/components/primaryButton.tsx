import { Button, ButtonProps, ComponentWithAs } from '@chakra-ui/react';

export interface PrimaryButtonProps extends ButtonProps {
  dark?: boolean;
  color?: string;
}

export const PrimaryButton: ComponentWithAs<'button', PrimaryButtonProps> = ({
  dark,
  color,
  ...props
}) => {
  return (
    <Button
      bg={color || (dark ? 'black' : 'primary.300')}
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
