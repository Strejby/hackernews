import React, { Fragment } from "react";

// Style.
import styles from "./style.module.scss";

// Atoms.
import Hyperlink from "../../atoms/hyperlink";

// Molecules.
import HeaderBanner from "../../molecules/headerBanner";
import HeaderNavigation from "../../molecules/headerNavigation";
import Wrapper from "../../atoms/wrapper";

// ----- Import end -----

export default function Header({ headerBannerData }: any) {
    return (
        <div className={styles.header__section}>
            {/* Banner */}
            <HeaderBanner>{headerBannerData}</HeaderBanner>
            <header className={styles.header}>
                <Wrapper>
                    <div className={styles.header__container}>
                        {/* Logo */}
                        <div className={styles.logo}>
                            <Hyperlink href="/" externalLink={false}>
                                Tech
                                <span className={styles.logo__secondary__color}>
                                    Stories
                                </span>
                            </Hyperlink>
                        </div>
                        {/* Navigation */}
                        <HeaderNavigation />
                    </div>
                </Wrapper>
            </header>
        </div>
    );
}
