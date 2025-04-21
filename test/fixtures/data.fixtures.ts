import { faker } from "@faker-js/faker";

export const testData = {
  DataForContactForms: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    businessEmail: faker.internet.email(),
    phoneNumber: faker.number.int({ min: 10000000, max: 99999999 }),
    companyWebsite: faker.internet.url(),
    requestDescribe: faker.string.sample(),
    howHearAbout: faker.string.sample(),
  },
  Dropdown: {
    reasonForContact: "Support",
    phoneCode: "United States (+1)",
  },
  Products: {
    telnyxHat: "Telnyx Classic Hat",
  },

  Currency: {
    UA: "₴",
  },

  ExpectedText: {
    upperText: "Experience AI-powered connectivity",
  },
};

export const urls = {
  pricingPage: "https://telnyx.com/pricing",
  shopPage: "https://shop.telnyx.com",
  linkedinTelnyx: "https://www.linkedin.com/company/telnyx/",
  twitterTelnyx: "https://twitter.com/telnyx",
  facebookTelnyx: "https://www.facebook.com/Telnyx/",
  singUpPage: "https://telnyx.com/sign-up",
};
