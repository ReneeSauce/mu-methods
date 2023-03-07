import { ChoosePeers } from "./choose-peers";
import { EntryPoint } from "./entry-point";
import { FinishReg } from "./finish-reg";
import { LogIn } from "./login";
import { NotifyPeers } from "./notify-peers";
import { RepeatSeedPhrase } from "./repeat-seed-phrase";
import { SeedPhrase } from "./seed-phrase";
import { UserInfo } from "./user-info";
import { WalletConfirm } from "./wallet-confirm";
import { WalletPermissions } from "./wallet-permissions";
import { WalletScan } from "./wallet-scan";

export const Steps = {
  UserInfo,
  SeedPhrase,
  ChoosePeers,
  RepeatSeedPhrase,
  NotifyPeers,
  FinishReg,
  EntryPoint,
  WalletScan,
  WalletConfirm,
  WalletPermissions,
  LogIn,
};
