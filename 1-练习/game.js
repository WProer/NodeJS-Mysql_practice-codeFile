let playerAction = process.argv[2];

let computerAction = "";

let random = Math.random() * 3;

console.log("请输入字符：'石头'或'剪刀'或'布'");

if (
  playerAction === "石头" ||
  playerAction === "剪刀" ||
  playerAction === "布"
) {
  if (random < 1) {
    computerAction = "石头";
    console.log("玩家出 ---->", playerAction);
    console.log("电脑出 ---->", computerAction);
  } else if (random > 1 && random < 2) {
    computerAction = "剪刀";
    console.log("玩家出 ---->", playerAction);
    console.log("电脑出 ---->", computerAction);
  } else {
    computerAction = "布";
    console.log("玩家出 ---->", playerAction);
    console.log("电脑出 ---->", computerAction);
  }

  if (playerAction === computerAction) {
    console.log("平局");
  } else if (
    (playerAction === "石头" && computerAction === "剪刀") ||
    (playerAction === "剪刀" && computerAction === "布") ||
    (playerAction === "布" && computerAction === "石头")
  ) {
    console.log("玩家赢");
  } else {
    console.log("电脑赢");
  }
} else {
  console.log("玩家没有按提示输入");
  console.log("请重新输入！！！");
}
