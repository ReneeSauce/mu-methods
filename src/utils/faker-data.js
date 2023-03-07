//faker-data
import { faker } from "@faker-js/faker";

export const account = {
  accountWallet: faker.word.interjection(),
  accountName: faker.finance.accountName(),
  accountId: faker.finance.ethereumAddress(),
  avatar: faker.internet.avatar(),
};
export const fSeedPhrases = Array.from({ length: 12 }, () =>
  faker.music.genre()
);

export const accountInfo = {
  wallet: faker.word.interjection(),
  name: faker.finance.accountName(),
  src: faker.internet.avatar(),
  alt: "this is an image of something",
  permissions: "Full", //need to figure out how to set randomly
  isCopiable: false,
};
