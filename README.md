Site de Portfólio de Ilustrações

Este é o portfólio online das minhas ilustrações, desenvolvido com React para apresentar meus trabalhos de forma dinâmica e interativa. 
O site inclui quatro páginas principais e oferece uma navegação intuitiva por meio de componentes reutilizáveis.

Funcionalidades:
1. Home (Slideshow Estilo TV)
A página inicial conta com um slideshow interativo que imita a troca de canais em uma TV analógica, proporcionando uma experiência visual nostálgica e criativa.
O design é focado em capturar a atenção dos visitantes logo na primeira interação.
Para isso, usei o useEffect para configurar um temporizador que troca automaticamente os slides a cada 5 segundos.
Junto, um setTimeout para exibir uma imagem de estática por 500ms entre as transições para imitar a troca de canais em uma TV.
Alternativamente, existem dois botões para navegação manual.

3. Galeria
Uma galeria de ilustrações onde os usuários podem selecionar imagens e aplicar um zoom nas que mais gostarem.
Esta funcionalidade foi implementada usando o useState do React, garantindo uma navegação fluida entre os desenhos.
Utilizei a função handleContextMenu para bloquear o menu de contexto do navegador, para impedir ações indesejadas, como o download direto das imagens.

4. Sobre
Uma página dedicada a compartilhar minha trajetória, habilidades e informações sobre meu trabalho como ilustrador.
Aqui, os visitantes podem conhecer mais sobre o contexto por trás das minhas criações.

5. Loja (em construção)
A página da loja está em desenvolvimento. No momento, exibe um componente de aviso informando que os produtos estarão disponíveis em breve.

Componentes de Navegação Reutilizáveis:
Banner: Um componente de headbar que inclui links para navegar facilmente entre as páginas do site.
Footer: Um rodapé com ícones de redes sociais em formato de símbolos, permitindo que os visitantes acessem minhas redes de forma direta e visualmente atrativa.

Tecnologias Utilizadas:
React: O projeto foi desenvolvido inteiramente com React, aproveitando sua capacidade de criar componentes reutilizáveis e gerenciar o estado de forma eficiente.
JavaScript ES6: Utilizei as mais recentes funcionalidades do JavaScript para garantir um código limpo e eficiente.
CSS Flexbox: Para criar um layout responsivo e adaptável em todas as páginas.

Como Rodar o Projeto Localmente:
1. Clone o repositório:   
   git clone https://github.com/GustavoMoldaCunha/Site-Portfolio.git
2. Navegue até o diretório do projeto:
   cd Site-Portfolio
3. Instale as dependências:
   npm install
4. Inicie o servidor local:
   npm start
5. O site irá rodar em http://localhost:3000.

Futuras Implementações:
1. Completar a página da Loja com links externos para venda.
2. Adicionar animações adicionais para a galeria.
3. Melhorar a responsividade do layout para alguns dispositivos.
