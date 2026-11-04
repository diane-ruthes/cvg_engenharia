# CVG Engenharia & Projetos — site institucional

Site da CVG Engenharia & Projetos (consultoria florestal e ambiental), feito com Vite, React, TypeScript e Tailwind CSS.

## Publicação

O site é publicado automaticamente no **GitHub Pages** a cada envio para a branch `main`
(workflow em `.github/workflows/deploy.yml`).

Configuração necessária (uma única vez), em **Settings → Pages** do repositório:
- **Source:** GitHub Actions.
- Para usar domínio próprio, informe-o em **Custom domain**; o endereço do site e o sitemap são ajustados automaticamente no próximo deploy.

## Editar conteúdo

| O que mudar | Onde |
| --- | --- |
| Telefone, e-mail, WhatsApp, redes sociais | `src/lib/site.ts` |
| Serviços | `src/components/Services.tsx` |
| Texto "A Empresa" | `src/components/About.tsx` |
| Municípios do mapa (e o número no topo) | `src/lib/site.ts` |
| Clientes (logos em `public/clients/`) | `src/components/Clients.tsx` |
| Título, descrição e dados para o Google | `index.html` |

## Rodar localmente

```sh
npm install
npm run dev     # http://localhost:8080
npm run build   # gera a pasta dist/
```

## Formulário de contato

O formulário chama a função `send-contact-email` do Supabase (`supabase/functions/`), que envia o e-mail via Resend.
A chave `RESEND_API_KEY` deve estar configurada nos segredos do projeto Supabase.
