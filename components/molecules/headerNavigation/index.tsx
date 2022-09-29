import React from "react";
import Button from "../../atoms/button";

// Atoms.
import Hyperlink from "../../atoms/hyperlink";

// Style.
import styles from "./style.module.scss";

// ----- Import end -----

function HeaderNavigation() {
    return (
        <nav className={styles.navigation}>
            {/* List */}
            <ul className={styles.navigation__list}>
                <li>
                    <Hyperlink href="/" externalLink={false}>
                        Post story
                    </Hyperlink>
                </li>
                <li>
                    <Hyperlink href="/" externalLink={false}>
                        Sign in
                    </Hyperlink>
                </li>
            </ul>
            {/* Call to action */}
            <Button>Create account</Button>
        </nav>
    );
}

export default HeaderNavigation;
