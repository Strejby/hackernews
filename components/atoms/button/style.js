import styled from "styled-components";

// ----- Import end -----

// Button background.
const buttonBackground = (props) => {
    // Variants.
    let colour;
    switch (props.variant) {
        case "primary":
            colour = "#017AFE";
            break;
        case "secondary":
            colour = "#ccc";
            break;
        default:
            colour = "#017AFE";
            break;
    }
    return colour;
};

// Button style.
const StyledButton = styled.button`
    background-color: ${(props) => buttonBackground(props)};
`;

// Export StyledButton.
export default StyledButton;
