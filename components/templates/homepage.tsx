import React, { Fragment } from "react";
import Image from "next/image";

// Style.
import styles from "./style.module.scss";

// Data.
import data from "./data.json";

// Organisms.
import Header from "../organisms/header";

// Atoms.
import Typography from "../atoms/typography";
import Hyperlink from "../atoms/hyperlink";
import Wrapper from "../atoms/wrapper";

// ----- Import end -----

export default function Homepage({ children, headerBannerData }: any) {
    return (
        <Fragment>
            {/* Header */}
            <Header headerBannerData={headerBannerData} />
            {/* Hero section */}
            <section className={styles.hero__section}>
                <Wrapper>
                    <div className={styles.hero}>
                        <div className={styles.hero__image__container}>
                            <Image
                                src="/images/heroImage.jpg"
                                layout="fill"
                                objectFit="cover"
                                draggable={false}
                                className={styles.hero__image}
                            />
                            <div className={styles.hero__image__overlay}>
                                <Typography>Stay curious.</Typography>
                                <Typography as="p">
                                    Discover stories, thinking, and expertise
                                    from writers on diffrent topics.
                                </Typography>
                                <div className={styles.hero__cta}>
                                    <Hyperlink
                                        href="#stories"
                                        externalLink={false}
                                    >
                                        <div className={styles.hero__cta__text}>
                                            Start reading
                                        </div>
                                    </Hyperlink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.companies}>
                        <p className={styles.companies__paragraph}>
                            Past stories of these companies
                        </p>
                        <ul className={styles.companies__list}>
                            {data.companyList.map((item, index): any => (
                                <li key={index}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </Wrapper>
            </section>
            {/* Main section */}
            <main id="stories" className={styles.main}>
                <Wrapper>
                    <h2 className={styles.headline}>Trending stories</h2>
                    {children}
                </Wrapper>
            </main>
        </Fragment>
    );
}
