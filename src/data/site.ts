export const site = {
  name: "Kuri",
  legalName: "Kuri and Co Limited",
  tagline: "We love dogs",
  description: "KURI - We Love Dogs. Raw dog food, dog training, daycare, grooming and health care in Christchurch.",
  urls: {
    production: "https://kuri.co.nz",
    netlifyPreview: "https://lively-gumdrop-0562de.netlify.app",
    github: "https://github.com/kuri-dog/kuri-website",
    shop: "https://shop.kuri.co.nz/",
    booking: "https://kuri.portal.gingrapp.com/",
  },
  contact: {
    phoneDisplay: "03 355 5874",
    phoneHref: "tel:+6433555874",
    email: "reception@kuri.co.nz",
    emailHref: "mailto:reception@kuri.co.nz",
    addressLine: "473 Saint Asaph Street, Phillipstown, Christchurch 8011",
    addressLineFull: "473 Saint Asaph Street, Phillipstown, Christchurch 8011, New Zealand",
    googleBusinessUrl:
      "https://www.google.com/maps/search/?api=1&query=Kuri+City+Doggy+Daycare+and+Raw+Food,+473+Saint+Asaph+Street,+Phillipstown,+Christchurch",
    googleMapEmbedUrl:
      "https://www.google.com/maps?q=473%20Saint%20Asaph%20Street%2C%20Christchurch&z=15&output=embed",
  },
  hours: {
    locationLabel: "City Centre",
    salesLabel: "City Centre (Sales)",
    weekdays: "Mon to Fri - 7am to 6pm",
    saturday: "Sat - 10am to 2pm (store only)",
  },
  reviews: {
    provider: "Google",
    score: "4.9",
    count: "208",
  },
  social: {
    tiktok: "https://www.tiktok.com/@kuricitynz",
    instagram: "https://www.instagram.com/kuriwelovedogs/",
    facebook: "https://www.facebook.com/KuriCityNZ/",
    pinterest: "https://www.pinterest.com/",
  },
} as const;
