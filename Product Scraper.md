# 🚀 Shopee Product Scraper
<br>
<br>


## 📌 Descrição

Este projeto consiste em um crawler que pesquisa produtos na Shopee com base em uma palavra-chave fornecida pelo usuário. Ele retorna uma lista estruturada dos produtos encontrados, armazenando os resultados em um arquivo JSON. O objetivo é coletar informações relevantes, como nome, preço, link e vendedor.
<br>
<br>


## 🎯 Objetivos

- Criar um crawler que busque produtos na Shopee com base em uma palavra-chave.

- Extrair informações relevantes dos produtos.

- Armazenar os dados coletados em um arquivo JSON.

- Garantir que o crawler seja eficiente e evite bloqueios.

<br>

## ✅ Tarefas (MVP)

### Configuração do projeto
<br>


✅ Instalar e configurar o Puppeteer.
✅ Criar o projeto e configurar o ambiente com Node.js + TypeScript.

- Criar um script base para abrir o site da Shopee.

### Implementação do crawler
Criar uma função para pesquisar produtos por palavra-chave.

 Implementar navegação até a página de resultados da Shopee.

 Extrair informações de cada produto:

- Nome

- Preço

- Link do produto

- Nome do vendedor

- Número de avaliações

- Salvar os dados em um arquivo ``products.json.``

### Prevenção de bloqueios

- Usar User-Agents dinâmicos para simular acessos reais.

- Definir atrasos aleatórios entre requisições para evitar detecção.

- Configurar Puppeteer para rodar em modo headless=false durante testes.


<br>
<br>

### 🚀 Otimizações
 - Criar uma função de rolagem infinita para carregar mais produtos automaticamente.

 - Implementar um sistema de logs para acompanhar execuções e erros.

 - Criar um cache para evitar buscas repetidas.

 - Permitir busca com múltiplas palavras-chave.

 - Criar um validador para remover produtos duplicados no JSON.

## 📂 Estrutura do Projeto (Sugestão)
```javascript
shopee-crawler/
│-- src/
│   ├── crawler.ts  # Responsável por buscar os dados
│   ├── parser.ts   # Processa e extrai informações
│   ├── storage.ts  # Salva os dados em JSON
│   └── utils.ts    # Funções auxiliares
│-- data/
│   ├── products.json  # Armazena os produtos coletados
│-- README.md
│-- package.json

```
<br>
<br>

## 📜 Licença

Este projeto é apenas para fins educacionais e de estudo. O uso de crawlers em sites deve respeitar os Termos de Serviço da plataforma-alvo.

