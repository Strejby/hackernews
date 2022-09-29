import React, { ReactNode } from "react";
import Link from "next/link";

// Icons.
import { ArrowSquareOut } from "phosphor-react";

// Style.
import styles from "./style.module.scss";

// ----- Import end -----

// Expected prop values
interface PropTypes {
    href: any;
    children: ReactNode;
    externalLink: boolean;
}

// Atom.
const Hyperlink = (prop: PropTypes) => {
    if (prop.externalLink !== true)
        return (
            <Link href={prop.href}>
                <a>
                    <span>{prop.children}</span>
                </a>
            </Link>
        );
    return (
        <Link href={prop.href}>
            <a target="_blank" className={styles.anchor}>
                <span>{prop.children}</span>
                <ArrowSquareOut size={16} />
            </a>
        </Link>
    );
};

// Default prop values
Hyperlink.defaultProps = {
    children: "Link text",
};

// Export atom.
export default Hyperlink;
