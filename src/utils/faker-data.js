//faker-data
import { faker } from "@faker-js/faker";

export let users = [];
// export let account=[];

export function createRandomAccount() {
  return {
    accountType: faker.word.interjection(),
    accountName: faker.accountName(),
    aID: faker.finance.bitcoinAddress(),
    avatar: faker.internet.avatar(),
  };
}
export const createFakerScanAccount = () => {
  return {
    accountType: faker.word.interjection(),
    accountName: faker.finance.accountName(),
    accountID: faker.finance.bitcoinAddress(),
    avatar: faker.internet.avatar(),
  };
};

export const account = {
  accountType: faker.word.interjection(),
  accountName: faker.finance.accountName(),
  accountID: faker.finance.bitcoinAddress(),
  avatar: faker.internet.avatar(),
};
