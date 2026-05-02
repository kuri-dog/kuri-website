# Kuri Page Rollout Plan

This file tracks page rebuild status inside the repo. The source of truth for the full migration remains `Migration-Discovery/`.

## Status Key

- `Not started`: no rebuild page exists yet.
- `Draft built`: first code version exists and needs review.
- `Approved`: user has approved layout/copy.
- `SEO checked`: title, description, canonical, internal links and schema reviewed.
- `Ready for launch`: approved, tracked, redirected if needed and tested.

## Wave 1 Pages

| Page | URL | Build status | SEO status | Analytics status | Redirect status | Approval status |
| --- | --- | --- | --- | --- | --- | --- |
| Homepage | `/` | Draft built | Needs review | Not implemented | Same URL | In progress |
| Grooming hub | `/dog-grooming-christchurch/` | Draft built | Needs review | Not implemented | Same URL | In review |
| Full Groom | `/dog-grooming-christchurch/full-groom/` | Draft built | Needs review | Not implemented | Same URL | In review |
| Contact | `/contact/` | Draft built | Needs review | Not implemented | New URL, old `/contact-us/` still needs decision | In review |
| Blog index | `/kuri-city-blog/` | Draft built | Needs review | Not implemented | Same URL | In review |
| Daycare | `/christchurchs-exclusive-small-doggy-daycare/` | Not started | Not started | Not implemented | Same URL | Pending |
| Raw Food | `/raw-dog-food/` | Not started | Not started | Not implemented | Same URL | Pending |
| Training | `/kuri-dog-training/` | Not started | Not started | Not implemented | Same URL | Pending |
| Walking | `/dog-walking/` | Not started | Not started | Not implemented | Same URL | Pending |

## Page Review Checklist

- Page loads on local preview and Netlify preview.
- Desktop and mobile layouts are checked.
- Primary CTA and secondary CTA work.
- Phone, email, shop, booking, map and review links work where present.
- SEO title, description and canonical are set.
- No staging/preview URL is indexable.
- Page-specific analytics events are defined before launch.
- Old URL is preserved or redirected.

## Current Checkpoint

- Latest confirmed local Git commit: `a095249 Add grooming hub and contact page`.
- Netlify public route check from Codex was blocked by local network access and needs browser/manual confirmation.
- No DNS or production launch changes have been made.
