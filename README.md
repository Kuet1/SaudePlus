# Saúde+ | Landing Page de Clínica Médica

> Projeto fictício desenvolvido para portfólio.

Landing page institucional de uma clínica médica. Foi pensada para apresentar os serviços, passar credibilidade e levar o visitante a entrar em contato ou agendar uma consulta.

## Funcionalidades

- **Layout responsivo (mobile-first):** adapta-se de smartphones a desktops
- **Menu mobile acessível:** botão hambúrguer com `aria-expanded` e `aria-controls`, fecha com `Esc`, com clique fora do menu e ao voltar para a tela de desktop
- **Seções institucionais:** serviços, história da clínica, depoimentos e contato
- **Formulário de contato** com validação nativa do HTML5
- **Modal com `<dialog>` nativo** para confirmação de interações
- **Navegação suave** entre as seções por âncoras

## Tecnologias

- **HTML5 semântico:** `header`, `nav`, `main`, `section`, `blockquote`, `cite`, `dialog`
- **CSS3:** custom properties (design tokens), Flexbox, media queries e `max()` para controlar a largura do conteúdo
- **JavaScript (Vanilla):** manipulação do DOM, eventos e `matchMedia`
- **Font Awesome:** ícones

## Boas práticas aplicadas

- Acessibilidade: textos alternativos descritivos, atributos ARIA e estados de foco visíveis
- Performance: imagens em **WebP**, `loading="lazy"` e dimensões explícitas para evitar layout shift
- Código organizado, com cores, espaçamentos e sombras centralizados em variáveis CSS

## Como executar

Não precisa de build nem de dependências:

```bash
git clone https://github.com/Kuet1/saude-plus.git
cd saude-plus
```

Depois é só abrir o `index.html` no navegador.

## Autor

**Kauet Dias**
[LinkedIn](https://www.linkedin.com/in/kauet-dias/) · [GitHub](https://github.com/Kuet1)

---

*Saúde+ é uma marca fictícia. Nomes, depoimentos, endereço e contatos são ilustrativos.*
