const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020');
 const date = await page.$eval('.lbl-licitacao:nth-child(1)', el => el.innerText)
 const bd = await page.$eval('.lbl-licitacao:nth-child(19)',el=>el.innerText)
 const o = await page.$eval('p:nth-child(6) , .lbl-licitacao:nth-child(4) font',el=>el.innerText)
const links = await page.$$eval(' .field__item a', anchors => { return anchors.map(anchor => anchor.textContent) })
console.log(date)
console.log(bd)
console.log(o)
console.log(links)
await browser.close();
output:
DATA DA PUBLICAÇÃO: 02/02/2021
DATA DA LICITAÇÃO: 18/02/2021
Registro de Preços pelo prazo de 12 meses, para aquisição de grampo galvanizado.
ALTO CONTRASTE,Ir para o conteúdo 1,  Ir para o menu 2,  Ir para a busca 3,  Ir para o rodapé 4,Acessibilidade,Alto Contraste,Mapa do Site,RSS,,,,,,ÍCONE DO LINK ,,SEM ÍCONE ,ÍCONE DO LINK ,,ÍCONE PDF ,,ÍCONE DO LINK ,,SEM ÍCONE ,×,Alto Contraste,Limpar,Sair,,Política de privacidade,Mapa do site,,,,,,
