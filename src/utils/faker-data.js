//faker-data
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

export const account = {
  accountWallet: faker.word.interjection(),
  accountName: faker.finance.accountName(),
  accountId: faker.finance.ethereumAddress(),
  avatar: faker.internet.avatar(),
};
export const fSeedPhrases = Array.from({ length: 12 }, () =>
  faker.music.genre()
);

export const accountInfoPrimary = {
  acctWallet: faker.word.interjection(),
  acctName: faker.finance.accountName(),
  acctAvatar: faker.internet.avatar(),
  acctAlt: "this is an image of something",
  AcctPermissions: faker.helpers.arrayElement(["F", "L", "R"]),
  acctPublicKey: faker.random.alphaNumeric(10),
  cryptoType: faker.helpers.arrayElement(["ETH", "BTC", "SOL", "MATIC"]),
  tsxBalanceCrypto: faker.finance.amount(0, 2, 2), //Crypto Balance
  //acctBalanceCurrency:?multiply blance by 1250 for testing in component
};
export const cryptoTsxs = [...Array(5).keys()].map((i) => ({
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
export const nftTsxs = [...Array(5).keys()].map((i) => ({
  i: i, //primary key
  cryptoType: "NFT", //NFT Transaction
  tsxType: faker.helpers.arrayElement(["Sent", "Recieved"]), //Transaction Type
  tsxNameSender: faker.finance.accountName().split(" ").join(""), //Sender account name
  tsxNameRecipient: faker.finance.accountName().split(" ").join(""), //Recipient account name
  acctTsxDesc: faker.company.catchPhrase(), //TransactionDescription
  acctTsxKeySender: faker.random.alphaNumeric(10), //Transaction Key Sender
  acctTsxKeyRecipient: faker.random.alphaNumeric(10), //Transaction Key Recipient
  acctTsxImage: faker.image.abstract(50, 50, true), //Transaction Image of Digital Asset 50px x 50px
  tsxDate: faker.date.recent(7),
}));

//1.Combine crypto and nft transaction arrays
export const allTsxs = nftTsxs.concat(cryptoTsxs);

//2.Sort with original date format
export const sortedTsx = allTsxs.sort((a, b) => b.tsxDate - a.tsxDate);

//3. function to change date format (must use after sort)
function transformDate(arr) {
  arr.forEach((tsx) => {
    tsx.tsxDate = dayjs(tsx.tsxDate.toDateString()).format("MMM DD");
  });
}
//4. call transformDate
transformDate(sortedTsx);

//5. get array of dates-- all dates here
const dateKeys = sortedTsx.map((tsx) => tsx.tsxDate);

//6.get unique date keys - only unique dates here
export const uniqueDate = dateKeys.filter(
  (item, index) => dateKeys.indexOf(item) === index
);

//example of filtering by one unique date--not being used in body
const dateOne = sortedTsx.filter((tsx) => tsx.tsxDate === uniqueDate[0]);
// console.log(dateOne);

//example of grouping data by text--not sure what format this is-noot being used in body
// const groupsByDate = allTsxs.reduce((group, tsx) => {
//   const date = new Date(tsx.tsxDate).toLocaleDateString("default", {
//     month: "long",
//     day: "2-digit",
//   });
//   group[date] = group[date] ?? [];
//   group[date].push(tsx);
//   return group;
// }, {});
// console.log(groupsByDate);
