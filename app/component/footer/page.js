import Link from "next/link";
import "./styles.css";

const footerWriteUp = {
  writeUp: ["We are not here to sell you products, we sell value through our expertise"],
  socialMediaLinks: {
    Twitter: <a href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1.2em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" /></svg></a>,
    LinkedIN: <a href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1.2em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" /></svg></a>,
    FaceBook: <a href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1.2em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg></a>,
    Intagram: <a href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1.2em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C328.7 695.2 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" /></svg></a>
  }
};

const footerLinks = {
  Home: [
    { id: 1, label: "Home", href: "#" },
    { id: 2, label: "Services", href: "#" },
    { id: 3, label: "Resources", href: "#" }
  ],
  "Contact Us": [
    { id: 1, label: "About Us", href: "#" },
    { id: 2, label: "Contact Us", href: "#" },
    { id: 3, label: "E-mail", href: "#" }
  ],
  "T & C": [
    { id: 1, label: "FAQ", href: "#" },
    { id: 2, label: "Terms and Condition", href: "#" }
  ]
};

function FooterWriteUp({ styles }) {
  return <div className={styles}>{footerWriteUp.writeUp}</div>;
}

function SocialMediaIcon({ icon }) {
  return <div className="socialMedia__icon">{icon}</div>;
}

function FooterLinks() {
  const listItemsA = footerLinks.Home.map((item) => (
    <li key={item.id} className="list__items">
      <Link href={item.href} className="onHover">
        {item.label}
      </Link>
    </li>
  ));

  const listItemsB = footerLinks["Contact Us"].map((item) => (
    <li key={item.id} className="list__items">
      <Link href={item.href} className="onHover">
        {item.label}
      </Link>
    </li>
  ));

  const listItemsC = footerLinks["T & C"].map((item) => (
    <li key={item.id} className="list__items">
      <Link href={item.href} className="onHover">
        {item.label}
      </Link>
    </li>
  ));

  return (
    <>
      <ul>{listItemsA}</ul>
      <ul>{listItemsB}</ul>
      <ul>{listItemsC}</ul>
    </>
  );
}

function Footer() {
  return (
    <div className="flex__Footer">
      <div>
        <div className="pundit__Footer text-4xl text-green-500">Pundit</div>
        <FooterWriteUp styles="pundit__Footer" />
        <div className="socialMedia__flex">
          <SocialMediaIcon icon={footerWriteUp.socialMediaLinks.FaceBook} />
          <SocialMediaIcon icon={footerWriteUp.socialMediaLinks.Intagram} />
          <SocialMediaIcon icon={footerWriteUp.socialMediaLinks.Twitter} />
          <SocialMediaIcon icon={footerWriteUp.socialMediaLinks.LinkedIN} />
        </div>
      </div>
      <FooterLinks />
    </div>
  );
}

export default Footer;