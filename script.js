const characterList = function (link, img, name, alt) {
  return `
      <a href="${link}" class="character">
    <img src="${img}" alt="${alt}">
    <p>${name}</p>
    </a>`;
};
const survivor = document.querySelector('.survivor-list');
const hunter = document.querySelector('.hunter-list');

survivor.innerHTML += characterList(
  'doctor.html',
  'doctor.png',
  '医師の小技',
  '医師の画像',
);
survivor.innerHTML += characterList(
  'lawyer.html',
  'lawyer.png',
  '弁護士の小技',
  '弁護士の画像',
);
survivor.innerHTML += characterList(
  'thief.html',
  'thief.png',
  '泥棒の小技',
  '泥棒の画像',
);
survivor.innerHTML += characterList(
  'gardener.html',
  'gardener.png',
  '庭師の小技',
  '庭師の画像',
);
survivor.innerHTML += characterList(
  'magician.html',
  'magician.png',
  'マジシャンの小技',
  'マジシャンの画像',
);
survivor.innerHTML += characterList(
  'adventurer.html',
  'adventurer.png',
  '冒険家の小技',
  '冒険家の画像',
);
survivor.innerHTML += characterList(
  'mercenary.html',
  'mercenary.png',
  '傭兵の小技',
  '傭兵の画像',
);
survivor.innerHTML += characterList(
  'air force.html',
  'air force.png',
  '空軍の小技',
  '空軍の画像',
);
survivor.innerHTML += characterList(
  'priest.html',
  'priest.png',
  '祭司の小技',
  '祭司の画像',
);
survivor.innerHTML += characterList(
  'engineer.html',
  'engineer.png',
  '機械技師の小技',
  '機械技師の画像',
);
survivor.innerHTML += characterList(
  'offense.html',
  'offense.png',
  'オフェンスの小技',
  'オフェンスの画像',
);
survivor.innerHTML += characterList(
  'mainds eye.html',
  'mainds eye.png',
  '心眼の小技',
  '心眼の画像',
);
survivor.innerHTML += characterList(
  'perfumer.html',
  'perfumer.png',
  '調香師の小技',
  '調香師の画像',
);
survivor.innerHTML += characterList(
  'cowboy.html',
  'cowboy.png',
  'カウボーイの小技',
  'カウボーイの画像',
);
survivor.innerHTML += characterList(
  'dancer.html',
  'dancer.png',
  '踊り子の小技',
  '踊り子の画像',
);
survivor.innerHTML += characterList(
  'fortune teller.html',
  'fortune teller.png',
  '占い師の小技',
  '占い師の画像',
);
survivor.innerHTML += characterList(
  'coffin master.html',
  'coffin master.png',
  '納棺師の小技',
  '納棺師の画像',
);
survivor.innerHTML += characterList(
  'prospector.html',
  'prospector.png',
  '探鉱者の小技',
  '探鉱者の画像',
);
survivor.innerHTML += characterList(
  'sorcerer.html',
  'sorcerer.png',
  '呪術師の小技',
  '呪術師の画像',
);
survivor.innerHTML += characterList(
  'wilding.html',
  'wilding.png',
  '野人の小技',
  '野人の画像',
);
survivor.innerHTML += characterList(
  'acrobat.html',
  'acrobat.png',
  '曲芸師の小技',
  '曲芸師の画像',
);
survivor.innerHTML += characterList(
  'first mate.html',
  'first mate.png',
  '一等航海士の小技',
  '一等航海士の画像',
);
survivor.innerHTML += characterList(
  'bar maid.html',
  'bar maid.png',
  'バーメイドの小技',
  'バーメイドの画像',
);
survivor.innerHTML += characterList(
  'postman.html',
  'postman.png',
  'ポストマンの小技',
  'ポストマンの画像',
);
survivor.innerHTML += characterList(
  'Grave keeper.html',
  'Grave keeper.png',
  '墓守の小技',
  '墓守の画像',
);
survivor.innerHTML += characterList(
  'prisoner.html',
  'prisoner.png',
  '囚人の小技',
  '囚人の画像',
);
survivor.innerHTML += characterList(
  'entomologist.html',
  'entomologist.png',
  '昆虫学者の小技',
  '昆虫学者の画像',
);
survivor.innerHTML += characterList(
  'painter.html',
  'painter.png',
  '画家の小技',
  '画家の画像',
);
survivor.innerHTML += characterList(
  'batsman.html',
  'batsman.png',
  'バッツマンの小技',
  'バッツマンの画像',
);
survivor.innerHTML += characterList(
  'toy craftsman.html',
  'toy craftsman.png',
  '玩具職人の小技',
  '玩具職人の画像',
);
survivor.innerHTML += characterList(
  'patient.html',
  'patient.png',
  '患者の小技',
  '患者の画像',
);
survivor.innerHTML += characterList(
  'paychologist.html',
  'paychologist.png',
  '心理学者の小技',
  '心理学者の画像',
);
survivor.innerHTML += characterList(
  'novelist.html',
  'novelist.png',
  '小説家の小技',
  '小説家の画像',
);
survivor.innerHTML += characterList(
  'girl.html',
  'girl.png',
  '少女の小技',
  '少女の画像',
);
survivor.innerHTML += characterList(
  'Crying clown.html',
  'Crying clown.png',
  '泣きピエロの小技',
  '泣きピエロの画像',
);
survivor.innerHTML += characterList(
  'professor.html',
  'professor.png',
  '教授の小技',
  '教授の画像',
);
survivor.innerHTML += characterList(
  'antique dealer.html',
  'antique dealer.png',
  '骨董商の小技',
  '骨董商の画像',
);
survivor.innerHTML += characterList(
  'composter.html',
  'composter.png',
  '作曲家の小技',
  '作曲家の画像',
);
survivor.innerHTML += characterList(
  'reporter.html',
  'reporter.png',
  '記者の小技',
  '記者の画像',
);
survivor.innerHTML += characterList(
  'aviation engineer.html',
  'aviation engineer.png',
  '航空エンジニアの小技',
  '航空エンジニアの画像',
);
survivor.innerHTML += characterList(
  'cheering squad.html',
  'cheering squad.png',
  '応援団の小技',
  '応援団の画像',
);
survivor.innerHTML += characterList(
  'puppet master.html',
  'puppet master.png',
  '人形師の小技',
  '人形師の画像',
);
survivor.innerHTML += characterList(
  'FireInvestigator.html',
  'FireInvestigator.png',
  '火災調査員の小技',
  '火災調査員の画像',
);
survivor.innerHTML += characterList(
  'Faro Lady.html',
  'Faro Lady.png',
  'レディ・ファウロの小技',
  'レディ・ファウロの画像',
);
survivor.innerHTML += characterList(
  'knight.html',
  'knight.png',
  '騎士の小技',
  '騎士の画像',
);
survivor.innerHTML += characterList(
  'meteorologist.html',
  'meteorologist.png',
  '気象学者の小技',
  '気象学者の画像',
);
survivor.innerHTML += characterList(
  'archer.html',
  'archer.png',
  '弓使いの小技',
  '弓使いの画像',
);
survivor.innerHTML += characterList(
  'Escapologist.html',
  'Escapologist.png',
  '脱出マスターの小技',
  '脱出マスターの画像',
);
survivor.innerHTML += characterList(
  'magic lantern.html',
  'magic lantern.png',
  '幻灯師の小技',
  '幻灯師の画像',
);
survivor.innerHTML += characterList(
  'bullfighter.html',
  'bullfighter.png',
  '闘牛士の小技',
  '闘牛士の画像',
);
survivor.innerHTML += characterList(
  'mime artist.html',
  'mime artist.png',
  'マイムアーティストの小技',
  'マイムアーティストの画像',
);
survivor.innerHTML += characterList(
  'lucky boy.html',
  'lucky boy.png',
  '幸運児の小技',
  '幸運児の画像',
);
// survivor.innerHTML += characterList(); コピー用

hunter.innerHTML += characterList(
  'avenger.html',
  'avenger.png',
  '復讐者の小技',
  '復讐者の画像',
);
hunter.innerHTML += characterList(
  'clown.html',
  'clown.png',
  '道化師の小技',
  '道化師の画像',
);
hunter.innerHTML += characterList(
  'ripper.html',
  'ripper.png',
  'リッパーの小技',
  'リッパーの画像',
);
hunter.innerHTML += characterList(
  'Bane.html',
  'Bane.png',
  '断罪狩人の小技',
  '断罪狩人の画像',
);
hunter.innerHTML += characterList(
  'octopus.html',
  'octopus.png',
  '黄衣の王の小技',
  '黄衣の王の画像',
);
hunter.innerHTML += characterList(
  'geisha.html',
  'geisha.png',
  '芸者の小技',
  '芸者の画像',
);
hunter.innerHTML += characterList(
  'spider.html',
  'spider.png',
  '結魂者の小技',
  '結魂者の画像',
);
hunter.innerHTML += characterList(
  'sirokuro.html',
  'sirokuro.png',
  '白黒無常の小技',
  '白黒無常の画像7',
);
hunter.innerHTML += characterList(
  'photographer.html',
  'photographer.png',
  '写真家の小技',
  '写真家の画像',
);
hunter.innerHTML += characterList(
  'crazy eye.html',
  'crazy eye.png',
  '狂眼の小技',
  '狂眼の画像',
);
hunter.innerHTML += characterList(
  'Yidhra.html',
  'Yidhra.png',
  '夢の魔女の小技',
  '夢の魔女の画像',
);
hunter.innerHTML += characterList(
  'lizard.html',
  'lizard.png',
  '魔トカゲの小技',
  '魔トカゲの画像',
);
hunter.innerHTML += characterList(
  'crybaby.html',
  'crybaby.png',
  '泣き虫の小技',
  '泣き虫の画像',
);
hunter.innerHTML += characterList(
  'queen.html',
  'queen.png',
  '血の女王の小技',
  '血の女王の画像',
);
hunter.innerHTML += characterList(
  'No.26.html',
  'No.26.png',
  'ボンボンの小技',
  'ボンボンの画像',
);
hunter.innerHTML += characterList(
  'apostle.html',
  'apostle.png',
  '使徒の小技',
  '使徒の画像',
);
hunter.innerHTML += characterList(
  'violinist.html',
  'violinist.png',
  'ヴァイオリニストの小技',
  'ヴァイオリニストの画像',
);
hunter.innerHTML += characterList(
  'engraver.html',
  'engraver.png',
  '彫刻師の小技',
  '彫刻師の画像',
);
hunter.innerHTML += characterList(
  'Undead.html',
  'Undead.png',
  'アンデッドの小技',
  'アンデッドの画像',
);
hunter.innerHTML += characterList(
  'Will.html',
  'Will.png',
  '破輪の小技',
  '破輪の画像',
);
hunter.innerHTML += characterList(
  'fisherman.html',
  'fisherman.png',
  '漁師の小技',
  '漁師の画像',
);
hunter.innerHTML += characterList(
  'wax figure.html',
  'wax figure.png',
  '蝋人形師の小技',
  '蝋人形師の画像',
);
hunter.innerHTML += characterList(
  'nightmare.html',
  'nightmare.png',
  '悪夢の小技',
  '悪夢の画像',
);
hunter.innerHTML += characterList(
  'clerk.html',
  'clerk.png',
  '書記官の小技',
  '書記官の画像',
);
hunter.innerHTML += characterList(
  'hermit.html',
  'hermit.png',
  '隠者の小技',
  '隠者の画像',
);
hunter.innerHTML += characterList(
  'night watch.html',
  'night watch.png',
  '夜の番人の小技',
  '夜の番人の画像',
);
hunter.innerHTML += characterList(
  'opera.html',
  'opera.png',
  'オペラ歌手の小技',
  'オペラ歌手の画像',
);
hunter.innerHTML += characterList(
  'gold.html',
  'gold.png',
  'フールズ・ゴールドの小技',
  'フールズ・ゴールドの画像',
);
hunter.innerHTML += characterList(
  'Ivy.html',
  'Ivy.png',
  '時空の影の小技',
  '時空の影の画像',
);
hunter.innerHTML += characterList(
  'sheep.html',
  'sheep.png',
  '足萎えの羊の小技',
  '足萎えの羊の画像',
);
hunter.innerHTML += characterList(
  'Hullabaloo.html',
  'Hullabaloo.png',
  'フラバルーの小技',
  'フラバルーの画像',
);
hunter.innerHTML += characterList(
  'shopkeeper.html',
  'shopkeeper.png',
  '雑貨商の小技',
  '雑貨商の画像',
);
hunter.innerHTML += characterList(
  'billiards.html',
  'billiards.png',
  'ビリヤードプレイヤーの小技',
  'ビリヤードプレイヤーの画像',
);
hunter.innerHTML += characterList(
  'queen bee.html',
  'queen bee.png',
  '女王蜂の小技',
  '女王蜂の画像',
);
// hunter.innerHTML += characterList('', '', '', ''); コピー用

const input = document.querySelector('input');

const noResult = document.querySelector('#no-result');

input.addEventListener('input', () => {
  let count = 0;
  const characters = document.querySelectorAll('.character');
  for (const character of characters) {
    const name = character.querySelector('p').textContent;
    if (name.includes(input.value)) {
      character.style.display = '';
      count++;
    } else {
      character.style.display = 'none';
    }
  }

  if (count === 0) {
    noResult.style.display = 'block';
  } else {
    noResult.style.display = 'none';
  }
});
