import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const InputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // console.log(InputText);
  createIncompleteList(InputText);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div作成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ作成
  const li = document.createElement("li");
  li.innerText = text;
  // console.log(li);

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 1 alert("完了");//関数は正常に機能している
    deleteFromIncompleteList(deleteButton.parentNode);
    // deleteIncompleteList関数で代替できたので不要となる
    // 2 const deleteTaret = completeButton.parentNode;
    //   document.getElementById("incomplete-list").removeChild(deleteTaret);
    // 4 挙動はOK　完了ボタンを押すと削除された
    // 5 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // 6 TODO内容テキストを取得する
    const text = addTarget.firstElementChild.innerText;
    // クリックした時にテキストの内容を取得できるか確認するために使用するconsole.log
    // console.log(text);
    // 7 div要素のみを使いまわししたい →　div以下の要素を初期化する必要がある
    addTarget.textContent = null;
    // console.log(addTarget); // <div class="list-row"></div>　が表示されることを確認
    // liタグの生成
    const li = document.createElement("li");
    //配下にtextを設定したい
    li.innerText = text;
    // console.log(li);// <li>hahah</li>入力値が表示される
    // buttonタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // 戻すボタンに対してイベントを付与する必要がある
    backButton.addEventListener("click", () => {
      // alert("戻す"); // 関数が動いているか確認
      //押された戻すボタンの親タグを（div）完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // テキストを取得する
      const text = backButton.parentNode.firstElementChild.innerHTML;
      //console.log(text);//テキストを取得できているかを確認する
      // 未完了のTODOに戻すことになるが処理内容自体は新しいTODOを登録する時にした処理と同じになる
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // addTargetが最終的にどうなっているかを確認する
    // console.log(addTarget);// <div class="list-row"><li>入力値</li><button>戻す</button></div>が表示される
    // 必要な要素を指定できたので、完了したTODOに要素を追加すればよい
    // 完了したTODOへ要素を追加
    document.getElementById("complete-list").appendChild(addTarget);
    // 完了ボタンを押すと、Uncaught TypeError: Cannot read property 'appendChild' of nullのエラー発生
  });

  // console.log(completeButton);

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // console.log(deleteButton);
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    //　以下の処理が完了ボタンと削除ぼたんで重複しているので関数：deleteIncompleteListを定義したため不要となった
    // const deleteTaret = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTaret);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // console.log(div);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// 3 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
