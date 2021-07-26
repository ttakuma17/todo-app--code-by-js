import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const InputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // console.log(InputText);

  //div作成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ作成
  const li = document.createElement("li");
  li.innerText = InputText;
  // console.log(li);

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    // console.log(deleteTaret);
    // const deleteTaret = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTaret);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    // console.log(addTarget);
    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    // console.log(li);

    //buttonタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // console.log(addTarget);　35の13：44までの挙動は同じ　問題なくエラーは発生していない

    //完了リストに追加　→　謎のエラーで詰まっている完了済みのTodoリストへ移動しない
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // console.log(completeButton);

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // console.log(deleteButton);
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    // console.log(deleteTaret); ←稼働確認用に記載して不要になった段階で削除した
    // const deleteTaret = deleteButton.parentNode;　←　該当の処理が重複していることが確認できたので関数化したため不要となった
    // document.getElementById("incomplete-list").removeChild(deleteTaret);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // console.log(div);

  //未完了のリストに追加　＊　なぜか1つ目のリストの間にテキストがはいり動画と挙動が違うようにみえる
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
