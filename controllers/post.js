// Pick and read a post

function changeContent(txt, componentName) {
    const tag = document.querySelector(componentName)
    return tag.innerHTML = txt;
  }
  
function getPosts(txt, datas){
return datas.filter(data => data.theme === txt);
}
  
function showTitles(posts){
// create list of titles
changeContent("<ul id='titles'></ul>","article")
posts.forEach(post => {
    const titleTag = document.createElement("li");
    const titleName = document.createTextNode(`${post.title}`);
    titleTag.appendChild(titleName);

    const titlesList = document.getElementById("titles");
    titlesList.appendChild(titleTag);

// open post
    titleTag.addEventListener("click", () => showPost(post))
});
}
  
function showPost(post){
changeContent(`${post.theme} | ${post.title}`, "header");
changeContent(post.content, "article"); // à passer en markdown
}
  
function changeTab(datas){
const tabs = document.querySelectorAll("nav button");
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
    let tabName = tab.getAttribute("id");
    changeContent(tabName, "header")
    let posts = getPosts(tabName, datas);
    showTitles(posts)
    })
})
}

export default changeTab;
