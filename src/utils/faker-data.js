//faker-data
import { faker } from "@faker-js/faker";

export const account = {
  accountType: faker.word.interjection(),
  accountName: faker.finance.accountName(),
  accountID: faker.finance.bitcoinAddress(),
  avatar: faker.internet.avatar(),
};
export const fSeedPhrases = Array.from({ length: 12 }, () =>
  faker.music.genre()
);
