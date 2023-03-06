import { ChoosePeers } from "./choose-peers";
import { ConnectWalletConfirm } from "./connect-wallet-confirm";
import { ConnectWalletPermissions } from "./connect-wallet-permissions";
import { ConnectWalletScan } from "./connect-wallet-scan";
import { EntryPoint } from "./entry-point";
import { FinishReg } from "./finish-reg";
import { NotifyPeers } from "./notify-peers";
import { RepeatSeedPhrase } from "./repeat-seed-phrase";
import { SeedPhrase } from "./seed-phrase";
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
  ConnectWalletConfirm,
  ConnectWalletPermissions,
};
