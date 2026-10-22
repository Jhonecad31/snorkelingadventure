import type { ui } from "@/i18n/ui";
// Desktop
import NatGeoSnorkelDesk from "./snorkel-experience-in-puerto-morelos.webp";
import RegularSnorkelDesk from "./discover-the-reef-life-snorkel-puerto-morelos.webp";
import PrivateSnorkelDesk from "./private-snorkel-in-puerto-morelos.webp";
import RegularSnorkelDeskES from "./es/discover-the-reef-life-snorkel-puerto-morelos-es.webp";
import PrivateSnorkelDeskES from "./es/private-snorkel-in-puerto-morelos-es.webp";
import TripAdvisorMentionDesk from "./two-years-in-a-row-in-tripadvisor.webp";
import TripAdvisorMentionDeskES from "./es/two-years-in-a-row-in-tripadvisor-es.webp";
// Mobile
import NatGeoSnorkelMob from "./mobile/snorkel-experience-in-puerto-morelos-mobile.webp";
import RegularSnorkelMob from "./mobile/discover-the-reef-life-snorkel-puerto-morelos-mobile.webp";
import PrivateSnorkelMob from "./mobile/private-snorkel-in-puerto-morelos-mobile.webp";
import RegularSnorkelMobES from "./es/mobile/discover-the-reef-life-snorkel-puerto-morelos-mobile-es.webp";
import PrivateSnorkelMobES from "./es/mobile/private-snorkel-in-puerto-morelos-mobile-es.webp";
import TripAdvisorMentionMob from "./mobile/two-years-in-a-row-in-tripadvisor-mobile.webp";
import TripAdvisorMentionMobES from "./es/mobile/two-years-in-a-row-in-tripadvisor-mobile-es.webp";

const images = {
    en: {
        desktop: [
            { img: RegularSnorkelDesk, alt: "snorkel in puerto morelos", href: "/snorkel-adventuring-details/" },
            { img: TripAdvisorMentionDesk, alt: "Two Years in a Row in TripAdvisor"},
            { img: PrivateSnorkelDesk, alt: "private boat and snorkel in puerto morelos", href: "/private-snorkeling-in-puerto-morelos/" },
            { img: NatGeoSnorkelDesk, alt: "Snorkeling Adventure Experience Recognized by National Geographic Traveller", href: "https://snorkelingadventure.com/blog/puerto-morelos-national-reef-park/", target: true },
        ],
        mobile: [
            { img: RegularSnorkelMob, alt: "snorkel in puerto morelos",  href: "/snorkel-adventuring-details/" },
            { img: TripAdvisorMentionMob, alt: "Two Years in a Row in TripAdvisor"},
            { img: PrivateSnorkelMob, alt: "private boat and snorkel in puerto morelos", href: "/private-snorkeling-in-puerto-morelos/" },
            { img: NatGeoSnorkelMob, alt: "Snorkeling Adventure Experience Recognized by National Geographic Traveller", href: "https://snorkelingadventure.com/blog/puerto-morelos-national-reef-park/", target: true },
        ]
    },
    es: {
        desktop: [
            { img: RegularSnorkelDeskES, alt: "snorkel en puerto morelos", href: "/snorkel-adventuring-details/" },
            { img: TripAdvisorMentionDeskES, alt: "Dos años consecutivos en TripAdvisor"},
            { img: PrivateSnorkelDeskES, alt: "private boat and snorkel in puerto morelos", href: "/private-snorkeling-in-puerto-morelos/" },
            { img: NatGeoSnorkelDesk, alt: "Experiencia de aventura de snorkel reconocida por National Geographic Traveller", href: "https://snorkelingadventure.com/blog/puerto-morelos-national-reef-park/", target: true },
        ],
        mobile: [
            { img: RegularSnorkelMobES, alt: "snorkel en puerto morelos", href: "/snorkel-adventuring-details/" },
            { img: TripAdvisorMentionMobES, alt: "Dos años consecutivos en TripAdvisor"},
            { img: PrivateSnorkelMobES, alt: "private boat and snorkel in puerto morelos", href: "/private-snorkeling-in-puerto-morelos/" },
            { img: NatGeoSnorkelMob, alt: "Experiencia de aventura de snorkel reconocida por National Geographic Traveller", href: "https://snorkelingadventure.com/blog/puerto-morelos-national-reef-park/", target: true },
        ]
    }
};

const getSlides = (lang: keyof typeof ui) => {
    const categoryImages = images[lang] || images["en"];

    if (!categoryImages) {
        return [];
    }

    return categoryImages;
};

export { getSlides };