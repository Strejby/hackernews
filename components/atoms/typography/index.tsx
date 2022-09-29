import React from "react";

// ----- Import end -----

// Export typography atom.
export default function Typography(props: any) {
    const { as: Component, children } = props;
    return <Component>{children}</Component>;
}

// Default prop values.
Typography.defaultProps = {
    as: "h1",
};
