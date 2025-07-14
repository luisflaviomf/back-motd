import { type ChangelogEntry, type Command, type Rule, type Server } from './types';

export const TEXTS = {
  logo: "Backstabber Brasil",
  subtitle: "Bem-vindo ao nosso servidor!",
  footer: "© 2025 Backstabber Brasil • Versão 1.0.0",
  buttons: {
    rules: "Regras do Servidor",
    discord: "Discord",
    store: "Loja / Doações",
    commands: "Comandos Úteis",
    changelog: "Changelog"
  },
  modalTitle: "Regras do Servidor",
  close: "Fechar",
};

export const ANNOUNCEMENTS: string[] = [
  "Novos mapas foram adicionados!",
  "Entre no nosso Discord!s.",
];

export const URLS = {
  discord: "https://discord.gg/FyTJDRMGQh",
  store: "https://discord.gg/FyTJDRMGQh",
  youtube: "#", // Placeholder
  instagram: "#", // Placeholder
};

export const SERVERS: Server[] = [
  {
    name: "Backstabber TTT",
    ip: "131.196.196.196:27220",
    players: "21/32",
    ping: "45ms",
    imageUrl: "https://static.wikia.nocookie.net/trouble-in-terrorist-town/images/e/e6/Site-logo.png/revision/latest?cb=20220818160901"
  },
  {
    name: "Backstabber Sandbox",
    ip: "179.95.34.251:27015",
    players: "15/64",
    ping: "62ms",
    imageUrl: "https://static.wikia.nocookie.net/gmod/images/1/1c/Wikia-Visualization-Main%2Cgmod.png/revision/latest/thumbnail-down/width/500/height/320?cb=20161102143132"
  }
];

export const SERVER_RULES: Rule[] = [
  { title: "1. Respeito Acima de Tudo", description: "Proibido qualquer tipo de ofensa, racismo, homofobia ou discurso de ódio. Trate todos os jogadores com respeito." },
  { title: "2. Sem Cheats ou Exploits", description: "O uso de hacks, scripts, ou qualquer tipo de trapaça resultará em banimento permanente e imediato." },
  { title: "3. Jogo Limpo", description: "Não utilize bugs ou exploits do mapa para obter vantagens indevidas. Jogue de forma justa." },
  { title: "4. Sem Spam ou Flood", description: "Evite spammar o chat de texto ou voz. Mantenha a comunicação clara e objetiva." },
  { title: "5. Nicknames Apropriados", description: "Use nicks que não sejam ofensivos ou que tentem se passar por membros da administração." },
];

export const USEFUL_COMMANDS: Command[] = [
  { command: "!build", description: "Ativa o modo de construção (noclip) e desativa o PVP para você." },
  { command: "!votekick [player]", description: "Inicia uma votação para expulsar um jogador." },
  { command: "!votemap [map_name]", description: "Inicia uma votação para mudar o mapa." },
];

export const CHANGELOG_ENTRIES: ChangelogEntry[] = [
  {
    version: "1.0.0",
    date: "14/07/2025",
    changes: [
      "MK9 adicionado.",
      "Actmod adicionado."
    ]
  }
];