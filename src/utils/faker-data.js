//faker-data
import { faker } from "@faker-js/faker";

/* -------------------------------------------------------------------------- */
/*               Account Profile for signup and add wallet flows              */
/* -------------------------------------------------------------------------- */
//faker account used in sign-up-connect-wallet and dashboard-add-wallet
export const account = {
  accountWallet: faker.word.interjection(),
  accountName: faker.random.words(2).split(" ").join(""),
  accountId: faker.finance.ethereumAddress(),
  avatar: faker.internet.avatar(),
};
//faker seeds used in sign-up-connect-wallet and dashboard-add-wallet
export const fSeedPhrases = Array.from({ length: 12 }, () =>
  faker.music.genre()
);

/* -------------------------------------------------------------------------- */
/*              Main Account Profile used when simulating Auth -              */
/* ------------------- used in Dashboard and Notifications ------------------ */
/* -------------------------------------------------------------------------- */
// export const acctProfilePrimary = [...Array(1).keys()].map((i) => ({
//   acctId:faker.random.numeric(3),
//   acctPrimary: true,
//   acctWallet: faker.word.interjection(),
//   acctName: faker.random.words(2).split(" ").join(""),
//   acctAvatar: faker.internet.avatar(),
//   acctAlt: "this is an image of something",
//   acctPermissions: faker.helpers.arrayElement(["F", "L", "R"]),
//   acctPublicKey: faker.random.alphaNumeric(10),
//   cryptoType: faker.helpers.arrayElement(["ETH"]),
//   //should we make the primary profile eth
//   acctBalanceCrypto: faker.finance.amount(0, 200, 0), //Crypto Balance
//   //acctBalanceCurrency:?multiply blance by 1250 for testing in component
//   acctBalanceTotal: faker.finance.amount(0, 2, 2), //Total amount
// }));
export const acctProfilePrimary = {
  acctId: faker.random.numeric(3),
  acctPrimary: true,
  acctWallet: faker.word.interjection(),
  acctName: faker.random.words(2).split(" ").join(""),
  acctAvatar: faker.internet.avatar(),
  acctAlt: "this is an image of something",
  acctPermissions: faker.helpers.arrayElement(["F", "L", "R"]),
  acctPubKey: "0x6b...776",
  cryptoType: faker.helpers.arrayElement(["ETH"]),
  acctBalanceCrypto: faker.finance.amount(0, 200, 0), //Crypto Balance
  //acctBalanceCurrency:?multiply blance by 1250 for testing in component
  acctBalanceTotal: faker.finance.amount(0, 2, 2), //Total amount
};

export const acctProfilesLinked = Array.from({ length: 2 }, () => ({
  acctPrimary: false,
  acctWallet: faker.word.interjection(),
  acctName: faker.random.words(2).split(" ").join(""),
  acctAvatar: faker.internet.avatar(),
  acctAlt: "this is an image of something",
  acctPermissions: faker.helpers.arrayElement(["F", "L", "R"]),
  acctPubKey: "0x6b...776",
  cryptoType: faker.helpers.arrayElement(["BTC", "SOL", "MATIC"]),
  acctBalanceCrypto: faker.finance.amount(0, 200000, 0), //Crypto Balance
  //acctBalanceCurrency:?multiply blance by 1250 for testing in component
  acctBalanceTotal: faker.finance.amount(0, 2, 2), //Total amount
}));
// export const acctProfilesLinked = [...Array(2).keys()].map((i) => ({
//   acctPrimary: false,
//   acctWallet: faker.word.interjection(),
//   acctName: faker.random.words(2).split(" ").join(""),
//   acctAvatar: faker.internet.avatar(),
//   acctAlt: "this is an image of something",
//   acctPermissions: faker.helpers.arrayElement(["F", "L", "R"]),
//   acctPublicKey: faker.random.alphaNumeric(10),
//   cryptoType: faker.helpers.arrayElement(["BTC", "SOL", "MATIC"]),
//   acctBalanceCrypto: faker.finance.amount(0, 200000, 0), //Crypto Balance
//   //acctBalanceCurrency:?multiply blance by 1250 for testing in component
//   acctBalanceTotal: faker.finance.amount(0, 2, 2), //Total amount
// }));
//sets account profiles
// export const acctProfiles = acctProfilePrimary.concat(acctProfilesLinked);
export const acctProfiles = acctProfilesLinked.concat(acctProfilePrimary);
console.log(acctProfiles);
console.log(acctProfilePrimary);
/* -------------------------------------------------------------------------- */
/*                           Transaction Data Faker                           */
/* -------------------------------------------------------------------------- */
const cryptoTsxs = [...Array(10).keys()].map((i) => ({
  i: i,
  cryptoType: faker.helpers.arrayElement(["ETH", "BTC", "SOL", "MATIC"]), //Crypto Transaction
  tsxType: faker.helpers.arrayElement(["Sent", "Recieved"]), //Transaction Type
  tsxAmtCrypto: faker.finance.amount(0, 1, 2), //Crypto Transaction Amount
  //acctTsxAmtCurrency: (tsxAmtCrypto.value *1250),?set value in formatting
  tsxBalanceCrypto: faker.finance.amount(0, 2, 2), //Crypto Balance
  //acctBalanceCurrency:?multiply blance by 1250 for testing in component
  tsxDate: faker.date.recent(3),
}));

//change these to tsx instead of acct
const nftTsxs = [...Array(5).keys()].map((i) => ({
  i: i, //primary key
  cryptoType: "NFT", //NFT Transaction
  tsxType: faker.helpers.arrayElement(["Sent", "Recieved"]), //Transaction Type
  tsxNameSender: faker.finance.accountName().split(" ").join(""), //Sender account name
  tsxNameRecipient: faker.finance.accountName().split(" ").join(""), //Recipient account name
  tsxDesc: faker.company.catchPhrase(), //TransactionDescription
  tsxKeySender: [
    faker.datatype.hexadecimal(),
    faker.finance.mask(3, false),
  ].join(""), //Transaction Key Sender
  tsxKeyRecipient: [
    faker.datatype.hexadecimal(),
    faker.finance.mask(3, false),
  ].join(""), //Transaction Key Recipient
  tsxImg: faker.image.abstract(50, 50, true), //Transaction Image of Digital Asset 50px x 50px
  tsxDate: faker.date.recent(7),
}));

//1.Combine crypto and nft transaction arrays
export const allTsxs = nftTsxs.concat(cryptoTsxs);
console.log(allTsxs);

const filtByCptType = allTsxs.filter(
  (x) => x.cryptoType === "ETH" || x.cryptoType === "NFT"
);
console.log(filtByCptType);
console.log(allTsxs);
