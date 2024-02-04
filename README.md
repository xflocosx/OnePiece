Copy code
```bash
git clone https://github.com/seu-usuario/one-piece-wanted-posters.git
<button onclick="copyToClipboard('git-clone-command')">Copy Code</button>

<script>
function copyToClipboard(elementId) {
  var copyText = document.getElementById(elementId);
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  alert("Copied the code!");
}
</script>
kotlin
Copy code

Substitua "seu-usuario" pelo seu nome de usuário no GitHub.

Explicação:

1. O bloco de código entre as três crases triplas é usado para mostrar código no README.md.

2. O botão "Copy Code" é adicionado usando HTML, e um script JavaScript é incluído para realizar a cópia para a área de transferência.

3. O script JavaScript utiliza a função `copyToClipboard` para criar um elemento de área de texto temporário, copiar o texto para ele, selecionar o texto e executar o comando de cópia.

4. O ID do elemento contendo o código (`git-clone-command` neste exemplo) é passado para a função `copyToClipboard`.

Ao clicar no botão "Copy Code", o código git clone será copiado para a área d
