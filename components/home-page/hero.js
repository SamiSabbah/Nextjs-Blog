import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          alt="Sami pic"
          src="/images/site/sami.jpg"
          width={300}
          height={300}
          quality={80}
        />
      </div>
      <h1>{`Hi, I'm Sami`}</h1>
      <p>{`I'm Front-end developer (react - redux - next)`}</p>
    </section>
  );
}

export default Hero;
