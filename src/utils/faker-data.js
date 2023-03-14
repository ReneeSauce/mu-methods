//faker-data
import { faker } from "@faker-js/faker";

/* -------------------------------------------------------------------------- */
/*               Account Profile for signup and add wallet flows              */
/* -------------------------------------------------------------------------- */
//faker account used in sign-up-connect-wallet and dashboard-add-wallet
/* -------------------------------------------------------------------------- */
/*               Account Profile for signup and add wallet flows              */
/* -------------------------------------------------------------------------- */
//faker account used in sign-up-connect-wallet and dashboard-add-wallet
export const account = {
  accountWallet: faker.word.interjection(),
  accountName: faker.random.words(2).split(" ").join(""),
  accountName: faker.random.words(2).split(" ").join(""),
  accountId: faker.finance.ethereumAddress(),
  avatar: faker.internet.avatar(),
};
//faker seeds used in sign-up-connect-wallet and dashboard-add-wallet
export const fSeedPhrases = Array.from({ length: 12 }, () =>
  faker.music.genre()
);

/* -------------------------------------------------------------------------- */
/*                           Transaction Data Faker                           */
/* -------------------------------------------------------------------------- */
/* --------------------------- crypto Transactions -------------------------- */
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

/* ---------------------------- nft Transactions ---------------------------- */
export const nftTsxs = [...Array(5).keys()].map((i) => ({
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

//test filter
const filtByCptType = allTsxs.filter(
  (x) => x.cryptoType === "ETH" || x.cryptoType === "NFT"
);
