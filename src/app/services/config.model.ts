export interface NavLink {
  label: string;
  route: string;
}

export interface CarouselItem {
  path: string;
  label: string;
  description: string;
}

export interface HomeServiceItem {
  url: string;
  title: string;
  alt: string;
  description: string;
  link: string;
}

export interface HomeServiceSection {
  title: string;
  items: HomeServiceItem[];
}

export interface ServiceItem {
  name: string;
  description: string;
  img_url: string;
}

export interface TestimonialItem {
  clientName: string;
  company: string;
  testimonial: string;
}

export interface CaseStudyItem {
  name: string;
  client: string;
  description: string;
  img_url: string;
  projectLink: string;
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface Theme {
  backgroundColor: string;
  cardBackgroundColor: string;
  navBackgroundColor: string;
  accentColor: string;
  textColor: string;
}

export interface SiteConfig {
  companyName: string;
  backendEndpoint: string;
  theme: Theme;
  navLinks: NavLink[];
  home: {
    heroMotto: string[];
    heroSectionTitle: string;
    carousel: CarouselItem[];
    homeServices: HomeServiceSection[];
  };
  services: {
    pageTitle: string;
    pageTitleMobile: string;
    items: ServiceItem[];
  };
  caseStudies: {
    pageTitle: string;
    pageTitleMobile: string;
    items: CaseStudyItem[];
  };
  testimonials: {
    pageTitle: string;
    pageTitleMobile: string;
    items: TestimonialItem[];
  };
  contact: {
    pageTitle: string;
    bookingLink: string;
    bookingButtonText: string;
    formLabels: {
      name: string;
      email: string;
      emailError: string;
      contactNumber: string;
      contactNumberError: string;
      projectDescription: string;
      chooseDate: string;
      dateHint: string;
      chooseCallBackDate: string;
      chooseCallBackMobile: string;
      resetButton: string;
      submitButton: string;
    };
  };
  footer: {
    socialMediaText: string;
    companyEmail: string;
    companyAddress: string;
    companyPhoneNumber: string;
    vision: string;
    copyright: string;
    sections: {
      products: {
        title: string;
        links: FooterLink[];
      };
      usefulLinks: {
        title: string;
        links: FooterLink[];
      };
      contact: {
        title: string;
      };
    };
  };
}
