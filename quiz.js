const quiz = [
  {
  //1問目
  question: "ゲーム史上最も売れたゲーム機は次のうちどれ？",
  answers: [
    "スーパーファミコン",
    "プレイステーション２",
    "ニンテンドースイッチ",
    "ニンテンドーDS"
    ],
  correct: "ニンテンドーDS"
  },{
  //2問目
  question: "糸井重里が企画にかかわった、任天堂の看板ゲームといえば？",
  answers: [
    "MOTHER２",
    "スーパーマリオブラザーズ３",
    "スーパードンキーコング",
    "星のカービィ"
    ],
  correct: "MOTHER２"

  },{
  //3問目
  question: "ドラゴンクエストシリーズでメラ系呪文の3番目に当たる魔法は何？",
  answers: [
    "メアリム",
    "メラメラ",
    "メラゾーマ",
    "メラガイアー"
    ],
  correct: "メラゾーマ"
  }
];
let quizIndex = 0;
const quizLength = quiz.length;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }

}
setupQuiz();



const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解!");
    score++;
  }else{
    window.alert("不正解!");
  }
  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだ存在する
    setupQuiz();
  }else{
    //問題数がもうない
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
  }
}

//ボタンをクリックしたら正誤判定
let handleIndex = 0;
while(handleIndex < buttonLength){
  $button[handleIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
