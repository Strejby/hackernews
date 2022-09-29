import React from "react";

// Style.
import styles from "./style.module.scss";

// ----- Import end -----

export default function Wrapper({ children }: any) {
    return <div className={styles.wrapper}>{children}</div>;
}
