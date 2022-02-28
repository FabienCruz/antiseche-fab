function categories(arr){
    let catList = arr.reduce(
      (prev, curr) => (prev.includes(curr.theme) ? prev : prev.concat(curr.theme)),
      []
    );
    // utiliser catList = new Set(arr);
    return catList;
}

function createBtn(txt){
  const btn = document.createElement("button");
  btn.innerHTML = txt;
  btn.setAttribute("id", txt);
  document.getElementById("btnList").appendChild(btn);
}

function createNavBar(datas){
  const btnNames = categories(datas);
  btnNames.forEach(bt => createBtn(bt)); // si new Set, utiliser for ... of
}

export default createNavBar;