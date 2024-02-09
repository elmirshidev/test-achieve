type Locale = "en" | "nl";
export interface Company {
    _id:number;
    image:string;
    company:string;
}
export interface Service {
    _id:number;
    image:string;
    pictures?:string;
    title:{
        en:string;
        nl:string;
    };
    description:{
        en:string;
        nl:string;
    }
}
export interface YtbLink {
    link:string;
}
export interface Case {
    _id:number;
    slug:string;
    title:{
        en:string;
        nl:string;
    };
    aboutCase: {
        en:string;
        nl:string;
    }
    WhoClient: {
        en:string;
        nl:string;
    };
    youtube: YtbLink[];
    faq: {
        en:{
            aklantvraag:string;
            bstrategie:string;
            doelstelling:string;
        },
        nl:{
            aklantvraag:string;
            bstrategie:string;
            doelstelling:string;
        },
    };
    image:string;
    GeleverdeDiensten: any;
    caseLogo: {
        url:string;
    };
    testimonial: {
        en: {
            testititle:string;
            text:string;
        },
        nl: {
            testititle:string;
            text:string;
        }
    }
}
interface PriceService {
    info: {
        en:string;
        nl:string;
    }
    seb: {
        en:string;
        nl:string;
    }
    sep: {
        en:string;
        nl:string;
    }
    ses: {
        en:string;
        nl:string;
    }
    title: {
        en:string;
        nl:string;
    }
}
export interface Price {
    _id:number;
    b_name:{
        en:string;
        nl:string;
    }
    b_price:{
        en:string;
        nl:string;
    }
    s_name:{
        en:string;
        nl:string;
    }
    s_price:{
        en:string;
        nl:string;
    }
    p_name:{
        en:string;
        nl:string;
    }
    p_price:{
        en:string;
        nl:string;
    }
    name: {
        en:string;
        nl:string;
    }
    services:any;
}

export interface CustomerTestimonial {
    _id:number;
    fullName:string;
    profession: {
        en:string;
        nl:string;
    }
    message: {
        en:string;
        nl:string;
    }
}

export interface FaqCategory {
    _id:number;
    title: {
        en:string;
        nl:string;
    }
}


export interface Faq {
    _id:number;
    question: {
        en:string;
        nl:string;
    }
    answer: {
        en:string;
        nl:string;
    }
    category_id:string;
}



export interface CarouselData {
    _id:number;
    title: {
        en:string;
        nl:string;
    }
    link: string;
}

export interface SiteInfo {
    _id:number;
    title:string;
    email:string;
    phone:string;
    address:string;
    facebook:string;
    twitter:string;
    instagram:string;
    linkedin:string;
    caseLogo : {
        url:string;
    }
    image:string;
    logo:string;
    pictures:string;
    youtube:string;
}



export interface AboutUs {
    _id:number;
    title: {
        en:string;
        nl:string;
    }
    introduction: {
        en:string;
        nl:string;
    }
    communicatie: {
        communicatieText: {
            en:string;
            nl:string;
        }
        communicatieIcon: string;
        title: {
            en:string;
            nl:string;
        }
    }
    transparantie: {
        transparantieText: {
            en:string;
            nl:string;
        }
        transparantieIcon: string;
        title: {
            en:string;
            nl:string;
        }
    }
    professionaliteit: {
        professionaliteitText: {
            en:string;
            nl:string;
        }
        professionaliteitIcon: string;
        title: {
            en:string;
            nl:string;
        }
    }
    passie: {
        passieText: {
            en:string;
            nl:string;
        }
        passieIcon: string;
        title: {
            en:string;
            nl:string;
        }
    }
    teamDescription: {
        en:string;
        nl:string;
    }
    teamTitle: {
        en:string;
        nl:string;
    }
}

export interface Team {
    _id:number;
    email:string;
    name:string;
    profession: {
        en:string;
        nl:string;
    }
    image:string;
}