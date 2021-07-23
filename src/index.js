import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const InputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // console.log(InputText);

  //div作成
  const div = document.createElement("div");
  div.className = "list-raw";

  //li作成
  const li = document.createElement("li");
  li.innerText = InputText;
  // console.log(li);

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  // console.log(div);

  //未完了のリストに追加　＊　なぜか1つ目のリストの間にテキストがはいり動画と挙動が違うようにみえる
  document.getElementById("incomplete-list").appendChild(div);

};

document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd());

