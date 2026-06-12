import { groq } from "next-sanity";

export const settingsQuery = groq`*[_type == "siteSettings"][0]{
  name, tagline, description, defaultWhatsApp, email, hours,
  "socials": { "instagram": instagram, "tiktok": tiktok, "facebook": facebook }
}`;

export const branchesQuery = groq`*[_type == "branch"] | order(order asc, name asc){
  "id": slug.current, name, city, address, hours, phone, whatsapp, mapsUrl, tone, isPrimary,
  "image": image.asset->url
}`;

export const branchBySlugQuery = groq`*[_type == "branch" && slug.current == $slug][0]{
  "id": slug.current, name, city, address, hours, phone, whatsapp, mapsUrl, tone, isPrimary,
  "image": image.asset->url
}`;

export const menuQuery = groq`*[_type == "menuCategory"] | order(order asc){
  "id": slug.current, name, sundanese, description,
  "items": *[_type == "menuItem" && references(^._id)] | order(order asc){
    "id": slug.current, name, description, price, tags, signature, tone,
    "availableAt": availableAt[]->slug.current,
    "image": image.asset->url
  }
}`;

export const signatureQuery = groq`*[_type == "menuItem" && signature == true] | order(order asc){
  "id": slug.current, name, description, price, tags, signature, tone,
  "availableAt": availableAt[]->slug.current,
  "image": image.asset->url
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc){
  "id": _id, name, role, quote, rating, "image": avatar.asset->url
}`;

export const promosQuery = groq`*[_type == "promo"] | order(order asc){
  "id": slug.current, title, description, badge,
  "startsAt": startsAt, "endsAt": endsAt, terms, tone,
  "image": image.asset->url
}`;

export const newsQuery = groq`*[_type == "newsPost"] | order(date desc){
  "id": slug.current, title, "date": date, excerpt, category, tone,
  "image": coverImage.asset->url
}`;

export const newsBySlugQuery = groq`*[_type == "newsPost" && slug.current == $slug][0]{
  "id": slug.current, title, "date": date, excerpt, category, tone, author,
  "image": coverImage.asset->url, body
}`;

export const newsSlugsQuery = groq`*[_type == "newsPost" && defined(slug.current)].slug.current`;

export const branchSlugsQuery = groq`*[_type == "branch" && defined(slug.current)].slug.current`;

export const eventsQuery = groq`*[_type == "eventSpace"] | order(order asc, capacity asc){
  "id": _id, name, capacity, suitableFor, description, packageSummary, tone,
  "image": images[0].asset->url
}`;

export const galleryQuery = groq`*[_type == "galleryItem"] | order(order asc){
  "id": _id, caption, tone, span, "image": image.asset->url
}`;
