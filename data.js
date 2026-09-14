export const CLASSES = [
 {id:'warden',name:'灯守',icon:'♜',desc:'最後の灯りを運ぶ。頑丈な身体と、刃で道を拓く。',hp:34,atk:5,items:['sword','bread','potion'],skill:'灯の一撃',detail:'隣接する敵すべてに攻撃力+4。',cool:7},
 {id:'scribe',name:'灰の書記',icon:'✧',desc:'燃え残った頁を読む。遠くの敵に、短い終わりを書く。',hp:25,atk:4,items:['staff','potion','oil'],skill:'灰の句読点',detail:'視界内の最も近い敵に8ダメージ。低HPで威力上昇。',cool:6},
 {id:'forager',name:'墓荒らしの料理人',icon:'♧',desc:'食べられるかは、食べて決める。死体から食料を得る。',hp:29,atk:4,items:['knife','bread','salt'],skill:'まかない',detail:'満腹度を15消費し、HPを12回復。',cool:9},
 {id:'mold',name:'菌の巡礼者',icon:'❋',desc:'毒に二度殺され、ようやく挨拶が通じた。毒を無効化する。',hp:27,atk:4,items:['knife','mushroom','venom'],skill:'胞子の祈り',detail:'視界内の敵に毒を付与。',cool:7,unlock:'poison'}
];
export const ENEMIES = [
 ['rat','地下鼠','r',1,6,2,'plain','光るものを集める。税金は払わない。'],['slime','瓶なしゼリー','s',1,8,2,'plain','瓶に入れれば商品になる。'],['bat','夜の端切れ','v',1,5,3,'fast','天井から落ちてくる夜。'],['beetle','錆食い','b',2,11,3,'armor','昨日まで扉だったものを食べている。'],['snake','緑の紐','~',2,9,3,'poison','荷造りには向かない。'],['skeleton','勤務中の骨','k',2,12,3,'plain','雇用契約に終了日がない。'],['fungus','歩く胞子袋','f',3,12,3,'poison','歩く理由については黙秘している。'],['hound','燭台犬','h',3,13,4,'fire','良い犬だ。ただし燃えている。'],['thief','空腹の影','t',3,10,4,'hunger','あなたの昼食だけを恨んでいる。'],['knight','中身のない騎士','K',4,19,4,'armor','鎧のほうが出世した。'],['mimic','親切な箱','m',4,15,5,'plain','開けなくても、向こうが開く。'],['moth','灰蛾','w',4,12,5,'fire','灯りに似た死因を探している。'],['leech','記憶蛭','l',5,17,5,'drain','初恋より先に朝食を忘れた。'],['oracle','目のない予言者','o',5,16,5,'poison','明日の毒を昨日仕込む。'],['golem','墓石職人','G',6,25,5,'armor','採寸のために殴ってくる。'],['bell','徘徊する鐘','B',6,21,6,'plain','誰も鳴らしていない。誰かは聞いている。'],['angel','落丁の天使','A',7,23,6,'drain','救済の頁だけ抜けていた。'],['wyrm','小さな終末','D',3,22,6,'dragon','まだ乳歯。しかし村は燃える。'],['tax','神の徴税人','§',4,19,5,'divine','祈りには手数料がかかる。'],['boss','根の下の王','Ω',10,78,8,'boss','王冠は根に絡まり、もう外れない。']
].map(([id,name,glyph,min,hp,atk,trait,lore])=>({id,name,glyph,min,hp,atk,trait,lore}));
export const ITEMS = [
 ['sword','欠けた長剣','weapon',2,'古い傷ほど、よく斬れる。'],['staff','炭の筆','weapon',1,'書いた文章は少し熱い。'],['knife','墓掘り包丁','weapon',1,'土も玉葱も、等しく刻む。'],['axe','弔いの斧','weapon',3,'別れの挨拶が短くなる。'],['fang','蛇歯の短剣','weapon',2,'攻撃した敵に毒を付与。','poison'],['brand','熾火の剣','weapon',3,'攻撃した敵を燃やす。','fire'],['hammer','鐘の槌','weapon',4,'誰にでもよく響く。'],['glassblade','硝子の刃','weapon',5,'握る側の勇気も必要だ。'],
 ['coat','苔の外套','armor',1,'雨と悪意を少し防ぐ。'],['mail','埋葬用の鎖帷子','armor',2,'返品された理由は聞かない。'],['shell','借りた甲羅','armor',3,'退去日は未定。'],['ashcoat','灰織りの衣','armor',1,'炎の継続ダメージを防ぐ。','fireproof'],
 ['potion','赤い小瓶','potion',12,'使うとHPを12回復。'],['elixir','夕焼けの瓶','potion',24,'使うとHPを24回復。'],['antidote','苦い透明液','cure',0,'毒と炎を消す。味は消えない。'],['venom','緑の小瓶','poison',5,'投げると毒。飲んでも毒。'],['oil','灯油の瓶','fire',7,'投げると炎。割っても炎。'],['bomb','せっかちな壺','bomb',14,'投げると周囲にも爆発。壊すと自分の足元で爆発。'],
 ['bread','石焼きパン','food',30,'石よりは柔らかい。'],['cheese','由緒あるチーズ','food',24,'家系図のほうが新しい。'],['mushroom','翡翠茸','food',22,'きれいなものには毒がある。','toxic'],['meat','名のない肉','food',28,'食べると今回の攻撃力+1。','meat'],['emberfruit','熾火の実','food',20,'温かい食事。温かすぎる。','hot'],['root','白い根','food',18,'毒を消す、土の味。','cure'],['salt','墓塩','salt',8,'隣の敵に投げると8ダメージ。骨には倍。'],['stone','気のいい石','stone',5,'投げられることに理解がある。'],['scroll','帰らずの頁','scroll',0,'次の階の入口へ移る。最深部ではHPを回復。'],['map','誰かの地図','map',0,'現在の階を明らかにする。敵は描かれていない。'],['seed','灯りの種','seed',0,'HPを5回復し、近くの霧を晴らす。'],['heart','予備の心臓','heart',4,'最大HP+4。この冒険でのみ有効。'],['coin','死者の小銭','relic',2,'使うと残響を2得る。死後に持ち帰る。'],['eye','乾いた眼球','eye',0,'この冒険中、敵のHPが見える。'],['tea','墓場の紅茶','potion',8,'HPを8回復。土の香り。'],['ration','兵士の乾糧','food',40,'食事を作業に変える発明。'],['frost','冬の瓶','frost',6,'投げると6ダメージ、3ターン凍結。'],['mirror','失礼な鏡','mirror',0,'壊すと強くなる。ただし7ダメージ。']
].map(([id,name,type,power,lore,tag])=>({id,name,type,power,lore,tag}));
export const TALENTS = [
 ['blast','火葬の礼儀','敵を倒すと、周囲1マスの敵に6ダメージ。'],['plague','次の患者','毒を持つ敵の死が、近くの敵に毒を広げる。'],['venom','爪の庭','通常攻撃で敵に毒を与える。'],['scout','初めての空気','未踏の床を8マス発見するたびHPを2回復。'],['feast','勝者の食卓','撃破で満腹度+7、HP+2。'],['blood','赤字の魔術','HP半分以下で、攻撃と職業技の威力+4。'],['ember','火の手紙','通常攻撃で敵に炎を与える。'],['guard','最後の肋骨','受ける直接ダメージを1減らす。'],['leech','借りた脈','通常攻撃が命中するたびHPを1回復。'],['gourmet','名を食べる','食料を食べるたび最大HP+2。'],['stride','空腹の速記','職業技の再使用までの時間を2短縮。'],['throw','投擲の作法','投げるアイテムの威力+6。'],['phoenix','焦げた処方箋','炎ダメージを無効化。炎の中でHPが1回復。','fire'],['rot','毒との文通','毒を無効化し、毒攻撃の持続+3。','poison'],['hunger','空の胃袋','空腹によるダメージ無効。満腹度0で攻撃+3。','hunger'],['grace','神への領収書','神罰と祭壇の代償を半減する。神も書類には弱い。','divine'],['fuse','身内の爆発','爆発ダメージを半減し、撃破時の爆発が10に。','explosion']
].map(([id,name,desc,unlock])=>({id,name,desc,unlock}));
export const UPGRADES = [
 {id:'vigor',group:'BODY',name:'骨をもう一本',desc:'初期最大HP +4。',cost:5,max:5},
 {id:'pocket',group:'BODY',name:'裏地のある棺',desc:'所持容量 +3、初期回復薬 +1。',cost:7,max:2},
 {id:'sight',group:'KNOWLEDGE',name:'命の読み方',desc:'敵の残りHPを表示する。',cost:4,max:1},
 {id:'taste',group:'KNOWLEDGE',name:'毒見の脚注',desc:'危険な食料に警告。罠を隣接する前に発見。',cost:5,max:1},
 {id:'anatomy',group:'KNOWLEDGE',name:'遺された観察',desc:'図鑑に敵のHP・攻撃力・性質を記載。',cost:6,max:1},
 {id:'smith',group:'WORLD',name:'地下に金床を',desc:'各偶数階に鍛冶屋。HPを5払い、武器を鍛える。',cost:7,max:1},
 {id:'dragon',group:'WORLD',name:'竜の卵を割る',desc:'竜が出現。死亡時の残響 +30%。炎の武器も出現。',cost:9,max:1},
 {id:'god',group:'WORLD',name:'留守の神を呼ぶ',desc:'奇数階に祭壇。力を授かるが、徴税人も出現。',cost:8,max:1},
 {id:'garden',group:'WORLD',name:'墓に根を張る',desc:'深層が胞子の庭に変化。貴重な食料と毒の罠が増える。',cost:6,max:1}
];
export const CAUSES={combat:'戦死',poison:'毒',fire:'炎',hunger:'飢餓',explosion:'自爆',divine:'神罰',mirror:'鏡への苦情',victory:'根の王を討伐'};
export const itemBy=id=>ITEMS.find(x=>x.id===id);
export const enemyBy=id=>ENEMIES.find(x=>x.id===id);
