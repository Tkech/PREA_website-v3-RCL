import * as styled_components from 'styled-components';

interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;
declare const ButtonWrapper: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {}, never>;

export { Button, ButtonProps, ButtonWrapper };
