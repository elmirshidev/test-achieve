const basePath = process.env.BASE_PATH;
export async function getCompanies() {
    const response = await fetch(`${basePath}/getCompanies`,{ next: { tags: ['companies'] } });
    return await response.json();
}
export async function getServices() {
    const response = await fetch(`${basePath}/getServices`,{ next: { tags: ['services'] } });
    return await response.json();
}
export async function getCases() {
    const response = await fetch(`${basePath}/getCases`,{ next: { tags: ['cases'] } });
    return await response.json();
}
export async function getPrices() {
    const response = await fetch(`${basePath}/getPrices`,{ next: { tags: ['prices'] } });
    return await response.json();
}
export async function getCustomerTestimonials() {
    const response = await fetch(`${basePath}/getCustomerTestimonials`,{ next: { tags: ['customerTestimonials'] } });
    return await response.json();
}
export async function getFaqCategories() {
    const response = await fetch(`${basePath}/getFaqCategories`,{ next: { tags: ['faqCategories'] } });
    return await response.json();
}
export async function getFaqs() {
    const response = await fetch(`${basePath}/getFaqs`,{ next: { tags: ['faqs'] } });
    return await response.json();
}
export async function getCarouselDataBottom() {
    const response = await fetch(`${basePath}/getCarouselDataBottom`,{ next: { tags: ['carouselDataBottom'] } });
    return await response.json();
}
export async function getCarouselDataTop() {
    const response = await fetch(`${basePath}/getCarouselDataTop`,{ next: { tags: ['carouselDataTop'] } });
    return await response.json();
}
export async function getSiteInfo() {
    const response = await fetch(`${basePath}/getSiteInfo`,{ next: { tags: ['siteInfo'] } });
    return await response.json();
}
export async function getAboutUs() {
    const response = await fetch(`${basePath}/getAboutUs`,{ next: { tags: ['aboutUs'] } });
    return await response.json();
}
export async function getTeams() {
    const response = await fetch(`${basePath}/getTeams`,{ next: { tags: ['teams'] } });
    return await response.json();
}