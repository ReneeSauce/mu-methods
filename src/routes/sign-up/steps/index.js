import { ChoosePeers } from "./choose-peers/choose-peers";
import { ConnectWalletScan } from "./connect-wallet-scan/connect-wallet-scan";
import { EntryPoint } from "./entrypoint";
import { FinishReg } from "./finish-reg";
import { NotifyPeers } from "./notify-peers";
import { RepeatSeedPhrase } from "./repeat-seed-phrase/repeat-seed-phrase";
import { SeedPhrase } from "./seed-phrase/seed-phrase";
import { UserInfo } from "./user-info";

export const Steps = {
  UserInfo,
  SeedPhrase,
  ChoosePeers,
  RepeatSeedPhrase,
  NotifyPeers,
  FinishReg,
  EntryPoint,
  ConnectWalletScan,
};
