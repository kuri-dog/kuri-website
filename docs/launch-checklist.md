# Kuri Launch Checklist

This checklist controls the final launch from WordPress/HostGator to the static Netlify site.

## Pre-Launch Safety

- Back up current DNS records before any change.
- Confirm MX, SPF, DKIM and DMARC records for email.
- Confirm `shop.kuri.co.nz` remains separate and untouched.
- Confirm booking, mail and any third-party subdomains still resolve.
- Keep WordPress live until launch has passed QA.
- Keep a rollback copy of the previous DNS records.

## Build And SEO

- Run `npm.cmd run check`.
- Confirm Netlify production build succeeds.
- Confirm preview deployments include `noindex, nofollow`.
- Confirm production deployment is indexable only after launch approval.
- Confirm sitemap uses production `https://kuri.co.nz` URLs only.
- Confirm `robots.txt` points to the correct production sitemap.
- Confirm all non-shop URLs are preserved or redirected.
- Confirm shop/product/cart/account URLs redirect to `https://shop.kuri.co.nz/`.

## Analytics And Webmaster

- Add Google Analytics 4.
- Add Google Search Console verification.
- Add Microsoft/Bing Webmaster verification.
- Test page views.
- Test button-click events for phone, email, booking, shop, map and reviews.
- Submit the production sitemap only after launch.

## Launch Test Routes

- `/`
- `/dog-grooming-christchurch/`
- `/dog-grooming-christchurch/full-groom/`
- `/contact/`
- `/kuri-city-blog/`
- `/raw-dog-food/`
- `/christchurchs-exclusive-small-doggy-daycare/`
- `/kuri-dog-training/`
- `/dog-walking/`

## Go/No-Go

- DNS backup complete.
- Email records confirmed.
- Shopify subdomain confirmed.
- Redirect map ready.
- Analytics verified.
- Search verification ready.
- Mobile QA complete.
- Rollback owner and rollback steps confirmed.

## Rollback

- Restore previous root and `www` DNS records.
- Confirm WordPress site resolves again.
- Confirm email still works.
- Confirm `shop.kuri.co.nz` still works.
