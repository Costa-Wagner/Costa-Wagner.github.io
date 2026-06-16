/* ══════════════════════════════════════
   projetos-data.js — Wagner Gonçalves Costa
   ══════════════════════════════════════
 * Fonte única de dados dos projetos.
 * Migração React: trocar por export const projetos = [...]
*/

// ── Contextos das categorias ───────────────────────────────────────────
const categoriaInfo = {
  api: {
    titulo:  'API · Aprendizagem por Projetos Integrados',
    texto:   'Metodologia implementada pela FATEC como parte de seu modelo de ensino, promovendo a integração entre faculdade e empresas na resolução de desafios reais do mercado. Baseada em licenças de código aberto (OSI/AFL-3.0), a metodologia proporciona aos alunos experiência prática em um ambiente de desenvolvimento semelhante ao encontrado no mercado profissional.'
  },
  academico: {
    titulo:  'Projetos Acadêmicos',
    texto:   'Projetos desenvolvidos no contexto das disciplinas do curso de DSM · Desenvolvimento de Software Multiplataforma · FATEC, evidenciando a aplicação dos conhecimentos adquiridos e a evolução técnica ao longo da graduação.'
  },
  pessoal: {
    titulo:  'Projetos Pessoais',
    texto:  'Projetos próprios desenvolvidos fora do ambiente acadêmico, explorando interesses e aprendizados autônomos.'
  }
};

const projetos = [

  // ── API ────────────────────────────────────────────────────────────────
  {
    slug:        'janosys-v2',
    nome:        'JanoSys SIGNA',
    subtitulo:   'Sistema Integrado de Gestão de Normas Aeronáuticas',
    periodo:     '1º sem 2026',
    semestre:    '2º sem · DSM',
    categoria:   'api',
    funcao:      'DevTeam · FrontEnd',
    stack:       ['React', 'Flask', 'MySQL', 'Docker', 'AWS'],
    empresa:     'AKAER · SJC/SP',
    metodologia: 'Scrum · Jira',
    descricao:   'Plataforma web desenvolvida em parceria com empresa do setor aeroespacial AKAER, para centralizar, organizar e filtrar requisitos normativos com controle de acesso multinível.',
    problema:    'A empresa gerenciava centenas de normas técnicas em planilhas dispersas, dificultando rastreabilidade, controle de versões e acesso segmentado por equipes.',
    solucao:     'Sistema web com filtros avançados por código, categoria, órgão e palavra-chave, controle de acesso por níveis de permissão (ACL) e painel de requisições com fluxo de aprovação.',
    atuacao:     'DevTeam · BackEnd - Estruturei o layout base da aplicação (Template), desenvolvi a navegação lateral com controle de acesso (ACL) e implementei o painel de requisições com lógica de estados de aprovação.',
    imagem:      'static/imagem/imagens/proj_2_api.jpg',
    links: {
      github: 'https://github.com/Costa-Wagner/Janosys-Project-1-Akaer',
      deploy: 'https://janosys-aeroespacial.vercel.app/',
    }
  },

  {
    slug:        'janosys-v1',
    nome:        'JanoSys',
    subtitulo:   'Visualização de Dados do Censo 2010/2022',
    periodo:     '2º sem 2025',
    semestre:    '1º sem · DSM',
    categoria:   'api',
    funcao:      'Product Owner',
    stack:       ['Python', 'Flask', 'Plotly', 'Pandas', 'Docker'],
    empresa:     'Cliente Fictício · Prefeitura',
    metodologia: 'Scrum · Jira',
    descricao:   'Dashboard interativo para visualização e análise de dados demográficos municipais, facilitando a distribuição estratégica de recursos públicos.',
    problema:    'Os dados do CENSO 2010/2022 estavam disponíveis apenas em formatos brutos, dificultando a interpretação por gestores públicos sem perfil técnico.',
    solucao:     'Dashboard web com gráficos interativos (Plotly), filtros por município e indicadores comparativos entre os dois censos.',
    atuacao:     'Product Owner - Conduzi a comunicação com o cliente, defini e priorizei o backlog, acompanhei as entregas via Jira e validei os incrementos a cada sprint.',
    imagem:      'static/imagem/imagens/proj_1_api.jpg',
    links: {
      github: 'https://github.com/Costa-Wagner/Janosys-Project',
      deploy: 'https://janosysapi1.vercel.app/',
    }
  },

  // ── ACADÊMICO ──────────────────────────────────────────────────────────
  {
    slug:        'aerocode',
    nome:        'Aerocode',
    subtitulo:   'Sistema de Gestão de Produção de Aeronaves',
    periodo:     '1º sem 2026',
    semestre:    '2º sem · DSM',
    categoria:   'academico',
    funcao:      'FullStack',
    stack:       ['TypeScript', 'Node.js', 'POO', 'JSON'],
    empresa:     '',
    metodologia: '',
    descricao:   'MVP em sistema de linha de comando (CLI) que simula o processo de produção aeronáutica do cadastro à entrega, com autenticação e controle de acesso por perfis.',
    problema:    'Modelar um processo industrial complexo aplicando POO, modularização e persistência de dados sem banco de dados externo.',
    solucao:     'CLI modular com autenticação por perfis, controle de aeronaves, peças, etapas de produção, testes e funcionários. Dados persistidos em arquivos JSON.',
    atuacao:     'Desenvolvimento integral: arquitetura, modelagem de classes, implementação das funcionalidades e testes manuais.',
    imagem:      'static/imagem/imagens/proj_2_aero.png',
    links: {
      github: 'https://github.com/Costa-Wagner/aerocode',
      deploy: 'https://aerocode-beta.vercel.app/',
    }
  },

  {
    slug:        'portfolio',
    nome:        'Portfólio',
    subtitulo:   'Site Portfólio Pessoal',
    periodo:     '2º sem 2025',
    semestre:    '1º sem · DSM',
    categoria:   'academico',
    funcao:      '',
    stack:       ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    empresa:     '',
    metodologia: '',
    descricao:   'Portfólio pessoal desenvolvido como projeto acadêmico, explorando boas práticas de desenvolvimento web, responsividade e organização de CSS modular.',
    problema:    'Criar uma presença digital profissional que apresente projetos, competências e trajetória de forma clara para recrutadores e pares técnicos.',
    solucao:     'Site estático multi-página com CSS modular, navbar responsiva, seção de projetos com modal, timeline de eventos e página de CV para impressão.',
    atuacao:     'Desenvolvimento integral: estrutura HTML, estilização CSS modular, lógica JS vanilla e deploy via Vercel.',
    imagem:      '',
    links: {
      github: 'https://github.com/Costa-Wagner/PORTFOLIO',
      deploy: 'https://portfolio-wagner-nu.vercel.app',
    }
  }

];

// ── Utilitários ────────────────────────────────────────────────────────
function getPorCategoria(categoria) {
  return projetos.filter(p => p.categoria === categoria);
}

function getPorSlug(slug) {
  return projetos.find(p => p.slug === slug);
}

function getPeriodosOrdenados(categoria) {
  const itens    = getPorCategoria(categoria);
  const periodos = [...new Set(itens.map(p => p.periodo))];
  return periodos.sort((a, b) => {
    const parse = str => {
      const parts = str.split(' ');
      const sem   = parts[0];
      const ano   = parseInt(parts[parts.length - 1]);
      return ano * 10 + (sem === '2º' ? 1 : 0);
    };
    return parse(b) - parse(a);
  });
}