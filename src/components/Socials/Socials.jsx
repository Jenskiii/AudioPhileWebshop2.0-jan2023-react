import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../svg/Symbols";
import styles from "./Socials.module.css";

export function Socials({ className }) {
  const socialLinks = [
    {
      id: crypto.randomUUID(),
      type: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      id: crypto.randomUUID(),
      type: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      id: crypto.randomUUID(),
      type: <InstagramIcon />,
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <ul className={`${styles.list} ${className}`}>
      {socialLinks.map((item) => {
        return (
          <li key={item.id}>
            <a href={item.link}>{item.type}</a>
          </li>
        );
      })}
    </ul>
  );
}
