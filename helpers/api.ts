// import getBaseUrl from "./getBaseUrl";

const basePath = process.env.NEXT_PUBLIC_URL;
export async function getCompanies() {
    const response = await fetch(`${basePath}/api/getCompanies`,{ next: { tags: ['companies'] } });
    return await response.json();
}
export async function getServices() {
    const response = await fetch(`${basePath}/api/getServices`,{ next: { tags: ['services'] } });
    return await response.json();
}
export async function getCases() {
    const response = await fetch(`${basePath}/api/getCases`,{ next: { tags: ['cases'] } });
    return await response.json();
}
export async function getPrices() {
    const response = await fetch(`${basePath}/api/getPrices`,{ next: { tags: ['prices'] } });
    return await response.json();
}
export async function getCustomerTestimonials() {
    const response = await fetch(`${basePath}/api/getCustomerTestimonials`,{ next: { tags: ['customerTestimonials'] } });
    return await response.json();
}
export async function getFaqCategories() {
    const response = await fetch(`${basePath}/api/getFaqCategories`,{ next: { tags: ['faqCategories'] } });
    return await response.json();
}
export async function getFaqs() {
    const response = await fetch(`${basePath}/api/getFaqs`,{ next: { tags: ['faqs'] } });
    return await response.json();
}
export async function getCarouselDataBottom() {
    const response = await fetch(`${basePath}/api/getCarouselDataBottom`,{ next: { tags: ['carouselDataBottom'] } });
    return await response.json();
}
export async function getCarouselDataTop() {
    const response = await fetch(`${basePath}/api/getCarouselDataTop`,{ next: { tags: ['carouselDataTop'] } });
    return await response.json();
}
export async function getSiteInfo() {
    const response = await fetch(`${basePath}/api/getSiteInfo`,{ next: { tags: ['siteInfo'] } });
    return await response.json();
}
export async function getAboutUs() {
    const response = await fetch(`${basePath}/api/getAboutUs`,{ next: { tags: ['aboutUs'] } });
    return await response.json();
}
export async function getTeams() {
    const response = await fetch(`${basePath}/api/getTeams`,{ next: { tags: ['teams'] } });
    return await response.json();
}