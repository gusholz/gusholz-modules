export enum SupportedLanguages {
  EN = "en",
  PT = "pt",
}

export enum ProjectTexts {
  ABOUT = "ABOUT",
  USAGE = "USAGE",
  CONTRIBUTIONS = "CONTRIBUTIONS",
}

const translations: Record<SupportedLanguages, Record<ProjectTexts, string>> = {
  [SupportedLanguages.EN]: {
    [ProjectTexts.ABOUT]: "This project's goal is to provide base components for your everyday frontend job. The project uses typescript to gain additional organization and its extended features, and CSS Modules to be easily modifiable to other css processors ",
    [ProjectTexts.USAGE]: "Need a specific component? Just search it in the library and modify it to follow your project conventions",
    [ProjectTexts.CONTRIBUTIONS]: "To contribute to this project, you just need to open a Pull Request with the additional component you want to add, following the project conventions, like using CSS Modules and Typescript",
  },
  [SupportedLanguages.PT]: {
    [ProjectTexts.ABOUT]: "O objetivo deste projeto é fornecer componentes base para o seu dia a dia como desenvolvedor frontend. O projeto utiliza TypeScript para obter maior organização e suas funcionalidades avançadas, além de usar CSS Modules, que podem ser facilmente adaptados para outros processadores de CSS.",
    [ProjectTexts.USAGE]: "Precisa de um componente específico? Basta procurá-lo na biblioteca e modificá-lo para seguir as convenções do seu projeto.",
    [ProjectTexts.CONTRIBUTIONS]: "Para contribuir com este projeto, basta abrir um Pull Request com o componente adicional que deseja adicionar, seguindo as convenções do projeto, como o uso de CSS Modules e TypeScript.",
  },  
};

export default function getText(selectedLanguage: SupportedLanguages, selectedText: ProjectTexts): string {
  return translations[selectedLanguage][selectedText];
}
