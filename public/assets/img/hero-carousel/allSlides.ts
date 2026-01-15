// Desktop
import RegularSnorkelDesk from "./discover-the-reef-life-snorkel-puerto-morelos.webp";
import PrivateSnorkelDesk from "./private-snorkel-in-puerto-morelos.webp";
// Mobile
import RegularSnorkelMob from "./mobile/discover-the-reef-life-snorkel-puerto-morelos-mobile.webp";
import PrivateSnorkelMob from "./mobile/private-snorkel-in-puerto-morelos-mobile.webp";

const images = {
    en: {
        desktop: [
            { img: RegularSnorkelDesk, alt: "snorkel in puerto morelos", href: "/snorkel-adventuring-details/" },
            { img: PrivateSnorkelDesk, alt: "private snorkel in puerto morelos", href: "/private-snorkeling-in-puerto-morelos/" }
        ],
        mobile: [
            { img: RegularSnorkelMob, alt: "snorkel in puerto morelos", href: "/snorkel-adventuring-details/" },
            { img: PrivateSnorkelMob, alt: "private snorkel in puerto morelos", href: "/private-snorkeling-in-puerto-morelos/" }
        ]
    }
};

const getSlides = (lang: keyof typeof images) => {
    const categoryImages = images[lang] || images["en"];

    if (!categoryImages) {
        return [];
    }

    return categoryImages;
};

export { getSlides };