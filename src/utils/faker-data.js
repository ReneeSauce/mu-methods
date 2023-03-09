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
export const cryptoTransactions = [...Array(5).keys()].map((i) => ({
  i: i,
  acctCryptoType: faker.helpers.arrayElement(["ETH", "BTC", "SOL", "MATIC"]), //Crypto Transaction
  acctTsxType: faker.helpers.arrayElement(["Sent", "Recieved"]), //Transaction Type
  acctTsxAmtCrypto: faker.finance.amount(0, 1, 2), //Crypto Transaction Amount
  //acctTsxAmtCurrency: (acctTsxAmtCrypto.value *1250),?set value in formatting
  acctBalanceCrypto: faker.finance.amount(0, 2, 2), //Crypto Balance
  //acctBalanceCurrency:?multiply blance by 1250 for testing in component
  acctTsxDate: faker.date
    .recent(3)
    .toDateString("en-us", { month: "short", day: "numeric" }),
}));

export const nftTransactions = [...Array(5).keys()].map((i) => ({
  i: i, //primary key
  acctCryptoType: "NFT", //NFT Transaction
  aactTsxType: faker.helpers.arrayElement(["Sent", "Recieved"]), //Transaction Type
  acctNameSender: faker.finance.accountName().split(" ").join(""), //Sender account name
  acctNameRecipient: faker.finance.accountName().split(" ").join(""), //Recipient account name
  acctTsxDesc: faker.company.catchPhrase(), //TransactionDescription
  acctTsxKeySender: faker.random.alphaNumeric(10), //Transaction Key Sender
  acctTsxKeyRecipient: faker.random.alphaNumeric(10), //Transaction Key Recipient
  acctTsxImage: faker.image.abstract(50, 50), //Transaction Image of Digital Asset 50px x 50px
  acctTsxDate: faker.date.recent(7).toDateString(),
  acctTsxDate: faker.date.recent(3),
}));

export const allTsx = nftTransactions.concat(cryptoTransactions);
console.log(allTsx);

const test = [
  {
    i: 0,
    acctCryptoType: "NFT",
    aactTsxType: "Sent",
    acctNameSender: "AutoLoanAccount",
    acctNameRecipient: "AutoLoanAccount",
    acctTsxDesc: "Virtual content-based time-frame",
    acctTsxKeySender: "8e05r7egns",
    acctTsxKeyRecipient: "xgd3cncj8s",
    acctTsxImage: "https://loremflickr.com/50/50/abstract",
    acctTsxDate: "2023-03-06T23:19:42.475Z",
  },
  {
    i: 1,
    acctCryptoType: "NFT",
    aactTsxType: "Recieved",
    acctNameSender: "CheckingAccount",
    acctNameRecipient: "SavingsAccount",
    acctTsxDesc: "Upgradable real-time secured line",
    acctTsxKeySender: "fhv3ifjdx2",
    acctTsxKeyRecipient: "nzaat3rhj7",
    acctTsxImage: "https://loremflickr.com/50/50/abstract",
    acctTsxDate: "2023-03-06T14:48:23.050Z",
  },
  {
    i: 2,
    acctCryptoType: "NFT",
    aactTsxType: "Recieved",
    acctNameSender: "SavingsAccount",
    acctNameRecipient: "CheckingAccount",
    acctTsxDesc: "Operative dedicated archive",
    acctTsxKeySender: "stzc1yif9g",
    acctTsxKeyRecipient: "vnzmfku5k2",
    acctTsxImage: "https://loremflickr.com/50/50/abstract",
    acctTsxDate: "2023-03-08T04:17:54.167Z",
  },
  {
    i: 3,
    acctCryptoType: "NFT",
    aactTsxType: "Sent",
    acctNameSender: "AutoLoanAccount",
    acctNameRecipient: "CheckingAccount",
    acctTsxDesc: "Synergized cohesive neural-net",
    acctTsxKeySender: "edur3i3ly8",
    acctTsxKeyRecipient: "e1uc0l0osr",
    acctTsxImage: "https://loremflickr.com/50/50/abstract",
    acctTsxDate: "2023-03-08T05:09:53.052Z",
  },
  {
    i: 4,
    acctCryptoType: "NFT",
    aactTsxType: "Sent",
    acctNameSender: "CheckingAccount",
    acctNameRecipient: "AutoLoanAccount",
    acctTsxDesc: "Down-sized attitude-oriented frame",
    acctTsxKeySender: "7e04pkuzea",
    acctTsxKeyRecipient: "tobpcu2l20",
    acctTsxImage: "https://loremflickr.com/50/50/abstract",
    acctTsxDate: "2023-03-07T06:53:21.162Z",
  },
  {
    i: 5,
    acctCryptoType: "NFT",
    aactTsxType: "Recieved",
    acctNameSender: "CreditCardAccount",
    acctNameRecipient: "InvestmentAccount",
    acctTsxDesc: "Open-architected 3rd generation archive",
    acctTsxKeySender: "2r2uunev8m",
    acctTsxKeyRecipient: "cti2rq32p3",
    acctTsxImage: "https://loremflickr.com/50/50/abstract",
    acctTsxDate: "2023-03-07T06:47:07.249Z",
  },
  {
    i: 6,
    acctCryptoType: "NFT",
    aactTsxType: "Recieved",
    acctNameSender: "AutoLoanAccount",
    acctNameRecipient: "InvestmentAccount",
    acctTsxDesc: "Face to face directional ability",
    acctTsxKeySender: "a8zt8ro0mo",
    acctTsxKeyRecipient: "xnc88hob4b",
    acctTsxImage: "https://loremflickr.com/50/50/abstract",
    acctTsxDate: "2023-03-08T17:14:31.732Z",
  },
  {
    i: 7,
    acctCryptoType: "NFT",
    aactTsxType: "Recieved",
    acctNameSender: "InvestmentAccount",
    acctNameRecipient: "MoneyMarketAccount",
    acctTsxDesc: "Cross-group eco-centric groupware",
    acctTsxKeySender: "i074mmr1yh",
    acctTsxKeyRecipient: "oty778z2mn",
    acctTsxImage: "https://loremflickr.com/50/50/abstract",
    acctTsxDate: "2023-03-07T06:01:52.947Z",
  },
  {
    i: 8,
    acctCryptoType: "NFT",
    aactTsxType: "Recieved",
    acctNameSender: "PersonalLoanAccount",
    acctNameRecipient: "SavingsAccount",
    acctTsxDesc: "Universal next generation solution",
    acctTsxKeySender: "onxh5o1lil",
    acctTsxKeyRecipient: "1tazckoda9",
    acctTsxImage: "https://loremflickr.com/50/50/abstract",
    acctTsxDate: "2023-03-07T07:26:42.069Z",
  },
  {
    i: 9,
    acctCryptoType: "NFT",
    aactTsxType: "Recieved",
    acctNameSender: "PersonalLoanAccount",
    acctNameRecipient: "CreditCardAccount",
    acctTsxDesc: "Profound multi-state migration",
    acctTsxKeySender: "vvvzgru07f",
    acctTsxKeyRecipient: "8675ok8bkq",
    acctTsxImage: "https://loremflickr.com/50/50/abstract",
    acctTsxDate: "2023-03-08T11:27:22.694Z",
  },
];

// const obj ={}

// test.map(i => {
//   //convert date - 2023 3 8
//   if obj.keys.includes( converted Date){

//   }

//   else obj[cionvertedDate] = {}

// })

// {

//   "march 3 2023": [{}, {}],
//   "march 4 2023": [{}, {}],
// }
