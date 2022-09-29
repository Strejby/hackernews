import React, { ReactNode } from "react";

// Libraries.
import { func, node } from "prop-types";

// Style.
import StyledButton from "./style";
import styles from "./style.module.scss";

// ----- Import end -----

// Expected prop values
interface PropTypes {
    onClick?: typeof func;
    variant?: string;
    children: ReactNode;
}

// Atom.
const Button = (prop: PropTypes) => {
    return (
        <StyledButton
            onClick={prop.onClick}
            variant={prop.variant}
            className={styles.button}
        >
            {prop.children}
        </StyledButton>
    );
};

// Default prop values.
Button.defaultProps = {
    children: "Button text",
    variant: "primary",
};

// Export atom.
export default Button;
