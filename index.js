// BUscando o elemento a partir do seu ID e atriabuindo a uma constante para que possamos manipular
const botao = document.getElementById('submit')
const resultBox = document.getElementById('result-box')
const img = document.getElementById('result-img')
const link = document.getElementById('result-link')
const nameGit = document.getElementById('result-name')
// Buscando o valor do input na pagina, enviando ela para o github e após o retorno estamos mostrando a div que contém os resultados.
function searchUser() {
  const input = document.getElementById('input')
  fetch(`https://api.github.com/users/${input.value}`)
    .then(response => response.json())
    .then(res => {
      resultBox.setAttribute('style', 'visibility: visible;')
      img.setAttribute('src', res.avatar_url)
      link.setAttribute('href', res.html_url)
      link.innerHTML = res.html_url
      nameGit.innerHTML = res.name
    })
}
// Após buscarmos o elemento botao, podemos adicionar um evento(searchuser) ao seu click
botao.addEventListener('click', searchUser)

// img - avatar_url
// link - html_url
// nome - name
