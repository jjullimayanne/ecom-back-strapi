Documentação do Endpoint: Obter Dados dos Produtos
Endpoint:
GET http://localhost:1337/api/products

Descrição:
Este endpoint permite que você obtenha uma lista de produtos do sistema. É necessário fornecer uma chave de autenticação e especificar o tipo de conteúdo nos cabeçalhos da requisição.

Requisição:
Método HTTP: GET
URL: http://localhost:1337/api/products
Cabeçalhos da Requisição:
Para acessar este endpoint, você deve incluir os seguintes cabeçalhos na requisição:

Authorization

Descrição: Este cabeçalho deve conter o token de autenticação do usuário que está fazendo a requisição.
Formato: Bearer <seu_token_de_autenticacao>
Exemplo:
makefile
Copiar código
Authorization: Bearer abcdefghijklmnopqrstuvwxyz1234567890
Content-Type

Descrição: Especifica o tipo de conteúdo da requisição. Para este endpoint, deve ser application/json.
Formato: Content-Type: application/json
Exemplo:
bash
Copiar código
Content-Type: application/json
Exemplo de Requisição com curl:
bash
Copiar código
curl -X GET "http://localhost:1337/api/products" \
-H "Authorization: Bearer abcdefghijklmnopqrstuvwxyz1234567890" \
-H "Content-Type: application/json"
Exemplo de Requisição com Postman:
Abra o Postman e crie uma nova requisição.
Selecione o método GET.
Insira a URL: http://localhost:1337/api/products.
Vá para a aba Headers e adicione os seguintes cabeçalhos:
Key: Authorization | Value: Bearer abcdefghijklmnopqrstuvwxyz1234567890
Key: Content-Type | Value: application/json
Clique em Send para enviar a requisição.
Resposta Esperada:
Se a requisição for bem-sucedida, o servidor retornará um status code 200 OK e um corpo da resposta contendo uma lista de produtos em formato JSON.

Exemplo de Resposta:

~~~json

{
    "data": [
        {
            "id": 1,
            "attributes": {
                "createdAt": "2024-08-24T03:34:02.688Z",
                "updatedAt": "2024-08-24T03:34:02.688Z",
                "publishedAt": "2024-08-24T03:34:02.683Z",
                "productId": "produto-12345",
                "nome": "Camiseta Básica Nike",
                "descricao": "Camiseta básica 100% algodão, confortável e versátil.",
                "categoria": "Roupas",
                "preco": 29.99,
                "tamanhosDisponiveis": "P",
                "cor": "Preto",
                "estoque": {
                    "P": 10,
                    "M": 15,
                    "G": 5
                },
                "peso": "0.5kg",
                "sku": "CAM-123-BASIC",
                "disponibilidade": true,
                "dataLancamento": "2024-01-01",
                "tags": [
                    "moda",
                    "básico",
                    "algodão"
                ],
                "imagens": [
                    "https://imgcentauro-a.akamaihd.net/1366x1366/M0Q9P001.jpg",
                    "https://imgcentauro-a.akamaihd.net/768x768/M0Q9P001A2.jpg"
                ]
            }
        },
        {
            "id": 2,
            "attributes": {
                "createdAt": "2024-08-24T03:35:55.060Z",
                "updatedAt": "2024-08-24T03:35:55.060Z",
                "publishedAt": "2024-08-24T03:35:55.057Z",
                "productId": "1",
                "nome": "Camiseta Básica Nike",
                "descricao": "Camiseta básica 100% algodão, confortável e versátil.",
                "categoria": "Roupas",
                "preco": 29.99,
                "tamanhosDisponiveis": "P",
                "cor": "Preto",
                "estoque": {
                    "P": 10,
                    "M": 15,
                    "G": 5
                },
                "peso": "0.5kg",
                "sku": "CAM-123-BASIC",
                "disponibilidade": true,
                "dataLancamento": "2024-01-01",
                "tags": [
                    "moda",
                    "básico",
                    "algodão"
                ],
                "imagens": [
                    "https://imgcentauro-a.akamaihd.net/1366x1366/M0Q9P001.jpg",
                    "https://imgcentauro-a.akamaihd.net/768x768/M0Q9P001A2.jpg"
                ]
            }
        },
        {
            "id": 3,
            "attributes": {
                "createdAt": "2024-08-24T03:38:13.523Z",
                "updatedAt": "2024-08-24T03:38:13.523Z",
                "publishedAt": "2024-08-24T03:38:13.520Z",
                "productId": "2",
                "nome": "Camiseta Nike",
                "descricao": "Camiseta Masculina Nike Manga Curta Academy 23 Top",
                "categoria": "Roupas",
                "preco": 109.99,
                "tamanhosDisponiveis": [
                    "P",
                    "M"
                ],
                "cor": "Preto",
                "estoque": {
                    "P": 10,
                    "M": 15,
                    "G": 5
                },
                "peso": "0.5kg",
                "sku": "CAM-123-BASIC",
                "disponibilidade": true,
                "dataLancamento": "2024-01-01",
                "tags": [
                    "moda",
                    "básico",
                    "algodão"
                ],
                "imagens": [
                    "https://imgcentauro-a.akamaihd.net/1366x1366/98394331.jpgg",
                    "https://imgcentauro-a.akamaihd.net/768x768/98394331A1.jpg"
                ]
            }
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 25,
            "pageCount": 1,
            "total": 3
        }
    }
}
~~~

Possíveis Erros:
401 Unauthorized: O token de autenticação está ausente, inválido ou expirado.

Mensagem de erro:
json
Copiar código
{
  "error": "Unauthorized"
}
400 Bad Request: Há um problema com a requisição, como cabeçalhos ausentes ou malformados.

Mensagem de erro:
json
Copiar código
{
  "error": "Bad Request"
}
Notas:
Certifique-se de que o token de autenticação seja válido e tenha permissão para acessar os produtos.
O endpoint deve ser acessado a partir do ambiente correto (por exemplo, localhost durante o desenvolvimento). Para ambientes de produção, substitua localhost pelo domínio apropriado.
