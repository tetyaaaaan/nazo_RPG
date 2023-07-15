let experience = 0;
let level = 1;
let statPoints = 0;
let attack = 10;
let defense = 5;

function defeatMonster() {
  experience += 100; // モンスターを倒した場合の経験値の増加量

  // 経験値がレベルアップに必要な経験値以上になったらレベルアップ
  if (experience >= getRequiredExperience()) {
    levelUp();
  }

  updateStats();
}

function levelUp() {
  level++;
  statPoints += 5; // レベルアップ時にステータスポイントを増加させる

  // ステータスポイントを振り分ける処理（ここでは攻撃力と防御力を1ずつ増加させる）
  attack++;
  defense++;

  updateStats();
}

function increaseAttack() {
  if (statPoints > 0) {
    attack += 5; // 攻撃力を上昇させる
    statPoints--; // ステータスポイントを消費する
    updateStats();
  }
}

function increaseDefense() {
  if (statPoints > 0) {
    defense += 3; // 防御力を上昇させる
    statPoints--; // ステータスポイントを消費する
    updateStats();
  }
}

function updateStats() {
  document.getElementById("exp").textContent = experience;
  document.getElementById("level").textContent = level;
  document.getElementById("statPoints").textContent = statPoints;
  document.getElementById("attack").textContent = attack;
  document.getElementById("defense").textContent = defense;
}

function getRequiredExperience() {
  // レベルアップに必要な経験値の計算式（例：レベルが上がるごとに必要な経験値が2倍になると仮定）
  return level * level * 100;
}