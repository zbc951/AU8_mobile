export enum ApiClassName {
  ApiPublicLocale = 'api-public-locale',
  ApiPublicLogin = 'api-public-login',
  ApiPublicLogout = 'api-public-logout',
  ApiPublicInit = 'api-public-init',
  ApiPublicOnline = 'api-public-online',
  ApiPublicMarquee = 'api-public-marquee',
  ApiPublicCarousel = 'api-public-carousel',
  ApiPublicTopRank = 'api-public-top-rank',
  ApiPublicCheckInvitationCode = 'api-public-check-invitation-code',
  ApiPublicRegister = 'api-public-register',
  ApiPublicSendPhoneCaptcha = 'api-public-send-phone-captcha',
  ApiPublicCheckPhoneCaptcha = 'api-public-check-phone-captcha',
  ApiPublicCaptcha = 'api-public-captcha',
  ApiPublicAccountExists = 'api-public-account-exists',
  ApiPublicEmailExists = 'api-public-email-exists',
  ApiPublicPhoneExists = 'api-public-phone-exists',
  ApiPublicAgentContact = 'api-public-agent-contact',
  ApiPublicGames = 'api-public-games',
  ApiPublicGameTypes = 'api-public-game-types',
  ApiPublicCouponActivity = 'api-public-coupon-activity',
  ApiPublicCoupon = 'api-public-coupon',
  ApiNsCheckLogin = 'api-ns-check-login',
  ApiNsMarquees = 'api-ns-marquees',
  ApiLetterAnnouncementRead = 'api-letter-announcement-read',
  ApiLetterAnnouncementRemove = 'api-letter-announcement-remove',
  ApiLetterAnnouncementList = 'api-letter-announcement-list',
  ApiLetterAnnouncementTagOptions = 'api-letter-announcement-tag-options',
  ApiLetterAnnouncementPin = 'api-letter-announcement-pin',
  ApiLetterUnreads = 'api-letter-unreads',
  ApiLetterMessageList = 'api-letter-message-list',
  ApiLetterMessageReplyAll = 'api-letter-message-reply-all',
  ApiLetterMessageSend = 'api-letter-message-send',
  ApiLetterMessageReply = 'api-letter-message-reply',
  ApiLetterMessageRemove = 'api-letter-message-remove',
  ApiLetterMessageRead = 'api-letter-message-read',
  ApiMemberInfo = 'api-member-info',
  ApiMemberWallet = 'api-member-wallet',
  ApiMemberMoneyLimit = 'api-member-money-limit',
  ApiMemberUpdatePassword = 'api-member-update-password',
  ApiMemberBindPhone = 'api-member-bind-phone',
  ApiMemberBindName = 'api-member-bind-name',
  ApiMemberUpdateGender = 'api-member-update-gender',
  ApiMemberUpdateInfo = 'api-member-update-info',
  ApiMemberValidAmount = 'api-member-valid-amount',
  ApiMemberWalletReward = 'api-member-wallet-reward',
  ApiMemberBankAdd = 'api-member-bank-add',
  ApiMemberBankEdit = 'api-member-bank-edit',
  ApiMemberBankToggleEnabled = 'api-member-bank-toggle-enabled',
  ApiMemberBankAll = 'api-member-bank-all',
  ApiMemberBankLastReview = 'api-member-bank-last-review',
  ApiMemberBankReviewList = 'api-member-bank-review-list',
  ApiMemberWithdrawCommit = 'api-member-withdraw-commit',
  ApiMemberWithdrawReviewList = 'api-member-withdraw-review-list',
  ApiMemberWithdrawLast = 'api-member-withdraw-last',
  ApiMemberDepositBankList = 'api-member-deposit-bank-list',
  ApiMemberDepositBankLast = 'api-member-deposit-bank-last',
  ApiMemberDepositBankAdd = 'api-member-deposit-bank-add',
  ApiMemberDepositBankLastOrAdd = 'api-member-deposit-bank-last-or-add',
  ApiMemberDepositBankCommit = 'api-member-deposit-bank-commit',
  ApiMemberDepositBankCancel = 'api-member-deposit-bank-cancel',
  ApiMemberDepositThirdAdd = 'api-member-deposit-third-add',
  ApiMemberDepositThirdPayments = 'api-member-deposit-third-payments',
  ApiMemberDepositThirdPaymentParams = 'api-member-deposit-third-payment-params',
  ApiMemberFavoriteAdd = 'api-member-favorite-add',
  ApiMemberFavoriteRemove = 'api-member-favorite-remove',
  ApiMemberFavoriteAll = 'api-member-favorite-all',
  ApiMemberGameWallet = 'api-member-game-wallet',
  ApiMemberGameActive = 'api-member-game-active',
  ApiMemberGameLaunchGame = 'api-member-game-launch-game',
  ApiMemberGameTransferOut = 'api-member-game-transfer-out',
  ApiMemberGameTransferIn = 'api-member-game-transfer-in',
  ApiMemberGamePlatformValidAmount = 'api-member-game-platform-valid-amount',
  ApiMemberCouponAllDeposit = 'api-member-coupon-all-deposit',
  ApiMemberCouponAllTransfer = 'api-member-coupon-all-transfer',
  ApiMemberCouponReviewList = 'api-member-coupon-review-list',
  ApiMemberCouponDepositLog = 'api-member-coupon-deposit-log',
  ApiMemberCouponCommit = 'api-member-coupon-commit',
  ApiMemberCouponAll = 'api-member-coupon-all',
  ApiMemberLogsWallet = 'api-member-logs-wallet',
  ApiMemberLogsTransfer = 'api-member-logs-transfer',
  ApiMemberLogsBet = 'api-member-logs-bet',
  ApiMemberLogsBetSum = 'api-member-logs-bet-sum',
  ApiMemberLogsBonus = 'api-member-logs-bonus',
  ApiMemberReviewDeposit = 'api-member-review-deposit',
  ApiMemberReviewWithdraw = 'api-member-review-withdraw',
  ApiMemberReviewCoupon = 'api-member-review-coupon',
  ApiMemberReviewBank = 'api-member-review-bank',
  ApiMemberReviewInformation = 'api-member-review-information',
  ApiPartner = 'api-partner'
}
export enum ApiPath {
  ApiPublicLocale = '/api/public/locale',
  ApiPublicLogin = '/api/public/login',
  ApiPublicLogout = '/api/public/logout',
  ApiPublicInit = '/api/public/init',
  ApiPublicOnline = '/api/public/online',
  ApiPublicMarquee = '/api/public/marquee',
  ApiPublicCarousel = '/api/public/carousel',
  ApiPublicTopRank = '/api/public/top-rank',
  ApiPublicCheckInvitationCode = '/api/public/check-invitation-code',
  ApiPublicRegister = '/api/public/register',
  ApiPublicSendPhoneCaptcha = '/api/public/send-phone-captcha',
  ApiPublicCheckPhoneCaptcha = '/api/public/check-phone-captcha',
  ApiPublicCaptcha = '/api/public/captcha',
  ApiPublicAccountExists = '/api/public/account-exists',
  ApiPublicEmailExists = '/api/public/email-exists',
  ApiPublicPhoneExists = '/api/public/phone-exists',
  ApiPublicAgentContact = '/api/public/agent-contact',
  ApiPublicGames = '/api/public/games',
  ApiPublicGameTypes = '/api/public/game-types',
  ApiPublicCouponActivity = '/api/public/coupon-activity',
  ApiPublicCoupon = '/api/public/coupon',
  ApiPublicQuestType = '/api/public/quest/type',
  ApiPublicQuestList = '/api/public/quest/list',
  ApiNsCheckLogin = '/api/ns/check-login',
  ApiNsMarquees = '/api/ns/marquees',
  ApiLetterAnnouncementRead = '/api/letter/announcement/read',
  ApiLetterAnnouncementRemove = '/api/letter/announcement/remove',
  ApiLetterAnnouncementList = '/api/letter/announcement/list',
  ApiLetterAnnouncementTagOptions = '/api/letter/announcement/tag-options',
  ApiLetterAnnouncementPin = '/api/letter/announcement/pin',
  ApiLetterUnreads = '/api/letter/unreads',
  ApiLetterMessageList = '/api/letter/message/list',
  ApiLetterMessageReplyAll = '/api/letter/message/reply-all',
  ApiLetterMessageSend = '/api/letter/message/send',
  ApiLetterMessageReply = '/api/letter/message/reply',
  ApiLetterMessageRemove = '/api/letter/message/remove',
  ApiLetterMessageRead = '/api/letter/message/read',

  ApiLetterMessageReadAll = '/api/letter/message/read-all',
  ApiLetterMessageRemoveAll = '/api/letter/message/remove-all',


  ApiMemberInfo = '/api/member/info',
  ApiMemberWallet = '/api/member/wallet',
  ApiMemberMoneyLimit = '/api/member/money-limit',
  ApiMemberUpdatePassword = '/api/member/update-password',
  ApiMemberBindPhone = '/api/member/bind-phone',
  ApiMemberBindName = '/api/member/bind-name',
  ApiMemberUpdateGender = '/api/member/update-gender',
  ApiMemberUpdateInfo = '/api/member/update-info',
  ApiMemberValidAmount = '/api/member/valid-amount',
  ApiMemberWalletReward = '/api/member/wallet/reward',
  ApiMemberBankAdd = '/api/member/bank/add',
  ApiMemberBankEdit = '/api/member/bank/edit',
  ApiMemberBankToggleEnabled = '/api/member/bank/toggle-enabled',
  ApiMemberBankAll = '/api/member/bank/all',
  ApiMemberBankLastReview = '/api/member/bank/last-review',
  ApiMemberBankReviewList = '/api/member/bank/review-list',
  ApiMemberWithdrawCommit = '/api/member/withdraw/commit',
  ApiMemberWithdrawReviewList = '/api/member/withdraw/review-list',
  ApiMemberWithdrawLast = '/api/member/withdraw/last',
  ApiMemberDepositBankList = '/api/member/deposit/bank/list',
  ApiMemberDepositBankLast = '/api/member/deposit/bank/last',
  ApiMemberDepositBankAdd = '/api/member/deposit/bank/add',
  ApiMemberDepositBankLastOrAdd = '/api/member/deposit/bank/last-or-add',
  ApiMemberDepositBankCommit = '/api/member/deposit/bank/commit',
  ApiMemberDepositBankCancel = '/api/member/deposit/bank/cancel',
  ApiMemberDepositThirdAdd = '/api/member/deposit/third/add',
  ApiMemberDepositThirdPayments = '/api/member/deposit/third/payments',
  ApiMemberDepositThirdPaymentParams = '/api/member/deposit/third/payment-params',
  ApiMemberFavoriteAdd = '/api/member/favorite/add',
  ApiMemberFavoriteRemove = '/api/member/favorite/remove',
  ApiMemberFavoriteAll = '/api/member/favorite/all',
  ApiMemberGameWallet = '/api/member/game/wallet',
  ApiMemberGameActive = '/api/member/game/active',
  ApiMemberGameLaunchGame = '/api/member/game/launch-game',
  ApiMemberGamePlatformValidAmount = '/api/member/game/platform-valid-amount',
  ApiMemberCouponAllDeposit = '/api/member/coupon/all-deposit',
  ApiMemberCouponAllTransfer = '/api/member/coupon/all-transfer',
  ApiMemberCouponReviewList = '/api/member/coupon/review-list',
  ApiMemberCouponDepositLog = '/api/member/coupon/deposit-log',
  ApiMemberCouponCommit = '/api/member/coupon/commit',
  ApiMemberCouponAll = '/api/member/coupon/all',
  ApiMemberLogsWallet = '/api/member/logs/wallet',
  ApiMemberLogsWalletTypegroup = '/api/member/logs/wallet/type-group',
  ApiMemberLogsTransfer = '/api/member/logs/transfer',
  ApiMemberLogsBet = '/api/member/logs/bet',
  ApiMemberLogsBetSum = '/api/member/logs/bet/sum',
  ApiMemberLogsBonus = '/api/member/logs/bonus',
  ApiMemberReviewDeposit = '/api/member/review/deposit',
  ApiMemberReviewWithdraw = '/api/member/review/withdraw',
  ApiMemberReviewActivityWallet = '/api/member/review/activityWallet',
  ApiMemberReviewCoupon = '/api/member/review/coupon',
  ApiMemberReviewBank = '/api/member/review/bank',
  ApiMemberReviewInformation = '/api/member/review/information',
  ApiMemberPlatformInfo = '/api/member/game/platform/info',

  ApiPartner = '/api/partner',
  ApiMemberQuestList = '/api/quest/list',
  ApiMemberQuestCommit = '/api/quest/commit',
  ApiMemberQuestClaimed = '/api/quest/claimed',

  ApiMemberQuestSortList = '/api/quest/sort/list',
  ApiMemberQuestSortEdit = '/api/quest/sort/edit',

  /**多錢包 */
  ApiWalletGetGames = '/api/wallet/getGames',
  ApiWalletGetwallet = '/api/wallet/getWallet',

  ApiForgetPwd1 = '/api/public/get-password',
  ApiForgetPwd2 = '/api/public/get-password/confirm',
  ApiForgetPwd3 = '/api/public/get-password/re-send',

  /** 鎖定金額 */

  ApiMemberLogsBetamountlog = '/api/member/logs/bet-amount-log',
  ApiMemberLogsDeductionbetamountlog = '/api/member/logs/deduction-bet-amount-log',
  ApiMemberLogsbetamountlogdetail = '/api/member/logs/bet-amount-log-detail',
  ApiMemberWithdrawResetlock = '/api/member/withdraw/reset-lock',
  apiMemberForth = '/api/member/forth-member',
  apiMemberBanklist = '/api/member/bank/bank-list',

  ApiTbBindPhone = '/api/tb-bind-phone',
  ApiPublicMarqueePage = '/api/public/marqueePage',
  ApiLetterMessageDetail = '/api/letter/message/detail',
  ApiPublicMarqueeDetail = '/api/public/marqueeDetail',


  ApiMemberMemberClubRank = '/api/member/member-club-rank',
  ApiMemberMemberBetAmountByPlatform = '/api/member/member-bet-amount-by-platform',
  ApiMemberClubRankList = '/api/member/club-rank-list',

  ApiAactivityAactivityWalletBuy = '/api/activity/activity-wallet/buy',
  ApiAactivityAactivityWalletGet = '/api/activity/activity-wallet/get',
  ApiAactivityAactivityWalletLog = '/api/activity/activity-wallet/log',
  ApiAactivityAactivityWalletHistory = '/api/activity/activity-wallet/wallet-history',

  ApiMemberAmountCompute = '/api/member/amount-compute',

  ApiActivityWalletMount = '/api/activity/activity-wallet/mount',
  ApiActivityWalletUnmount = '/api/activity/activity-wallet/unmount',
  ApiActivityWalletGetFromWallet = '/api/activity/activity-wallet/get-from-wallet',
  ApiActivityAactivityWalletWallets = '/api/activity/activity-wallet/wallets',
  ApiActivityAactivityWalletWalletAll = '/api/activity/activity-wallet/wallet-all',
  ActivityWalletReportList = '/api/activity/activity-wallet/report/list',
  ActivityWalletGiveUp = '/api/activity/activity-wallet/give_up',

  ApiMemberLogsWaterBackfillDetail = '/api/member/logs/water-backfill-detail',
  ApiWalletGetPlotformWallet = '/api/wallet/get-plotform-wallet'


}
