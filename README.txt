LAC LOPES DISTRIBUIDORA DE ALIMENTOS - SITE (PRÉVIA PARA REVISÃO)
=================================================================

CONTEÚDO
  index.html          página única do site
  css/style.css       estilos
  js/main.js          animações e interações
  assets/img/         fotos, logo (512 e 256 px), favicons e imagem de apoio do hero
  assets/img/original/logo-lac-lopes-original.jpg   arquivo da logo exatamente como recebido
  assets/video/       vídeo do hero (hero.mp4)

COMO EXTRAIR E ABRIR
  1. Extraia o ZIP inteiro (clique direito > Extrair tudo). Mantenha as pastas juntas.
  2. Dê dois cliques em index.html para abrir no navegador.
  3. Para testar como no servidor (recomendado), abra um terminal na pasta e rode:
       python3 -m http.server 8000
     e acesse http://localhost:8000

COMO TESTAR
  - Clique nos botões de WhatsApp: cada um abre uma conversa com o número (41) 99500-0688
    e uma mensagem própria, de acordo com o botão (as mensagens ficam em index.html).
  - Teste no celular (ou reduza a janela do navegador) para ver o menu mobile.

COMO PUBLICAR
  - Não há build nem dependências: é HTML, CSS e JavaScript puros.
  - Envie todo o conteúdo da pasta (index.html, css, js, assets) para a raiz da hospedagem
    (Netlify, Vercel, Cloudflare Pages, Hostinger, etc.), mantendo a estrutura de pastas.
  - O site usa HTTPS normalmente; nenhum caminho depende de arquivos da sua máquina.

OBSERVAÇÕES
  - As fontes (Fraunces e Manrope) são carregadas do Google Fonts e precisam de internet.
    Sem conexão, o navegador usa fontes padrão (Georgia / sistema) e o site continua funcionando.
  - Para editar produtos: veja o comentário "PRODUTOS" em index.html.
  - Para editar mensagens do WhatsApp: altere o trecho depois de "?text=" nos links wa.me
    (o texto precisa estar codificado para URL, por exemplo espaço = %20).
  - Imagem de compartilhamento (og:image) não foi definida porque o domínio final ainda não existe.
    Quando houver domínio, adicione uma meta og:image com o endereço completo da imagem.
  - Itens a confirmar com o proprietário antes de publicar: uso das fotos, nota 5,0 / 30 avaliações
    do Google, imagem e vídeo de queijo do hero, horário de funcionamento (não informado).
