let transParams = (data) => {
  let params = new URLSearchParams();
  for (let item in data) {
    params.append(item, data["" + item + ""]);
  }
  return params;
};

//OLD=>NEW
var codeMap = {
  945510695: "945535750", //android-游戏频道看视频得积分2-激励视频
  945490759: "945535754", //android-买什么都省0.1元薅羊毛-激励视频
  945490446: "945535421", //android-阅读每日读书福利广告2-激励视频
  945490436: "945535424", //android-阅读每日读书福利广告1-激励视频
  945490433: "945535429", //android-阅读打卡视频广告2-激励视频
  945488048: "945535497", //android-买什么都省刮机票-激励视频
  945485144: "945535532", //android-签到领福利赚积分翻牌活动-激励视频
  945479131: "945535537", //android-分享看视频翻倍得积分-激励视频
  945474727: "945535596", //android-签到看视频得积分2-激励视频
  945444936: "945535612", //android-签到领福利赚积分-激励视频
  945432413: "945535616", //android-阅读打卡看视频得积分-激励视频
  945430422: "945535625", //android-签到任务读小说赚积分-激励视频
  945413733: "945535626", //android-沃之树看视频得浇水机会-激励视频
  945399856: "945535628", //android-沃之树看视频发流量-激励视频
  945398647: "945535629", //android-签到小游戏盲盒4-激励视频
  945398637: "945535631", //android-签到小游戏盲盒3-激励视频
  945398632: "945535632", //android-签到小游戏盲盒2-激励视频
  945398627: "945535633", //android-签到小游戏盲盒-激励视频
  945369958: "945535634", //android-积分商城积分夺宝-激励视频
  945369931: "945535635", //android-积分商城女神口红-激励视频
  945369805: "945535636", //android-积分商城小游戏-激励视频
  945363378: "945535637", //android-买什么都省刮刮卡积分翻倍-激励视频
  945363376: "945535641", //android-买什么都省刮刮卡-激励视频
  945358647: "945535673", //android-阅读章节视频得积分2-激励视频
  945358646: "945535674", //android-阅读章节视频得积分1-激励视频
  945349372: "945535675", //android-买什么都省神奇便利店2-激励视频
  945349368: "945535676", //android-买什么都省神奇便利店-激励视频
  945340295: "945535677", //android-聚人气看视频得助力-激励视频
  945339639: "945535679", //android-签到小游戏买幸运转转赚4-激励视频
  945339636: "945535680", //android-签到小游戏买扭蛋机4-激励视频
  945339630: "945535681", //android-签到小游戏买幸运转转赚3-激励视频
  945339624: "945535683", //android-签到小游戏买扭蛋机3-激励视频
  945339619: "945535684", //android-签到小游戏买幸运转转赚2-激励视频
  945339610: "945535686", //android-签到小游戏买扭蛋机2-激励视频
  945318810: "945535689", //android-签到小游戏买什么都省免费夺宝-激励视频
  945318808: "945535693", //android-签到小游戏买什么都省申请便利店抽奖-激励视频
  945318805: "945535695", //android-签到小游戏买什么都省转盘抽奖-激励视频
  945292330: "945535698", //android-沃砍看视频砍价-激励视频
  945290261: "945535700", //ios-游戏佰多惠看视频得道具-激励视频
  945281443: "945535703", //android-业务查询看视频得积分-激励视频
  945254827: "945535704", //android-签到看视频得积分-激励视频
  945254821: "945535705", //android-福利订单看视频得积分-激励视频
  945254816: "945535706", //android-10分精彩看视频得积分-激励视频
  945235460: "945535707", //android-签到小游戏-激励视频
  945228773: "945535710", //android-签到任务看视频领流量-激励视频
  945228768: "945535712", //android-游戏漫乐游看视频得道具-激励视频
  945228766: "945535714", //android-游戏杭州西米看视频得道具-激励视频
  945228764: "945535718", //android-游戏悠游看视频得道具-激励视频
  945228762: "945535724", //android-游戏触推河北看视频得道具-激励视频
  945228759: "945535729", //android-游戏互娱看视频得道具-激励视频
  945210860: "945535731", //android-游戏深圳微应看视频得道具-激励视频
  945188117: "945535734", //android-游戏掌上乐游看视频得道具-激励视频
  945188116: "945535736", //android-游戏频道看视频得积分-激励视频
  945188114: "945535740", //android-阅读计时器看视频得积分-激励视频
  945188112: "945535743", //android-签到看视频翻倍得积分-激励视频
};
module.exports = {
  transParams,
};