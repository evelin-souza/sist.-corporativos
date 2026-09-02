# Prática 1: Segurança e Controle de Acesso

**Discente:** Evelin  Silva  
**Matrícula:** 20241038060001

## Execução: via Docker Compose

```bash
# Construir e iniciar os containers
docker compose up --build -d

# Visualizar logs
docker compose logs -f

# Encerrar e remover containers
docker compose down
```

## Contas Criadas durante a prática

| Nome | E-mail | Papel | Regra de Senha |
|---|---|---|---|
| Evelin | evelin@empresa.com | gestor | Matrícula (`20241038060001`) |
| Silva | silva@empresa.com | auditor | Matrícula (Invertida, como solicitado) (`10006083014202`) |


## Conta ja existente
| Nome | E-mail | Papel |
|---|---|---|
| Carla | carla@empresa.com | solicitante | 

## Explicação Token e Papel

O status `401 Unauthorized` é retornado quando o usuário possui a identidade não comprovada, nesse caso, a API não consegue identificar o mesmo devido: ausência, erro ou expiração do token JWT. 
Já o status `403 Forbidden` ocorre quando o usuário está devidamente autenticado, com sua identidade confirmada, mas o seu perfil (também conhecido como `papel`) não possui a autorização necessária para acessar aquele recurso específico.
