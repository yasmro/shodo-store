const tabs = Array.from(document.querySelectorAll(".tab"))
const contents = Array.from(document.querySelectorAll(".content"))

window.onload = () => {
  tabs.forEach(tab => {
    tab.addEventListener("click", e => switchContent(e))
  })
}

const switchContent = (e) => {
  var index = tabs.findIndex(tab => tab === e.target);
  if(index === -1){
    index = 0
  }

  e.target.parentNode.querySelectorAll('.tab').forEach(tab => tab.classList.remove(('active')))
  tabs[index].classList.add('active')
  
  e.target.parentNode.parentNode.querySelectorAll('.content').forEach(content => content.classList.remove(('show')))
  contents[index].classList.add('show')
}

