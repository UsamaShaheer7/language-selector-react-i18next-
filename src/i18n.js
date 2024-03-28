import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enHomeTranslations from "./locales/en/Home.json";
import enAboutTranslations from "./locales/en/About.json";
import deHomeTranslations from "./locales/de/Home.json";
import deAboutTranslations from "./locales/de/About.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      // English (en) - United States
      en: {
        home: enHomeTranslations,
        about: enAboutTranslations,
      },

      // German (de) - Germany
      de: {
        home: deHomeTranslations,
        about: deAboutTranslations,
      },
      // // French (fr) - France
      // fr: {
      //   translations: {
      //     greeting: "Bonjour le monde!",
      //     description: {
      //       heading1: "Comment ça va",
      //       paragraph1:
      //         "Ceci est un projet simple pour démontrer l'utilisation de react-i18next. Il utilise le détecteur de navigateur pour <1>{{variable}}</1>",
      //     },
      //   },
      // },
      // // Spanish (es) - Spain
      // es: {
      //   translations: {
      //     greeting: "¡Hola Mundo!",
      //     description: {
      //       heading1: "¿Cómo estás",
      //       paragraph1:
      //         "Este es un proyecto simple para demostrar el uso de react-i18next. Utiliza el detector de navegador para <1>{{variable}}</1>",
      //     },
      //   },
      // },
      // // Chinese (zh) - China
      // zh: {
      //   translations: {
      //     greeting: "你好，世界！",
      //     description: {
      //       heading1: "你好吗",
      //       paragraph1:
      //         "这是一个简单的项目，用于演示react-i18next的使用。它使用浏览器检测器来 <1>{{variable}}</1>",
      //     },
      //   },
      // },
      // // Hindi (hi) - India
      // hi: {
      //   translations: {
      //     greeting: "नमस्ते दुनिया!",
      //     description: {
      //       heading1: "कैसे हो तुम",
      //       paragraph1:
      //         "यह एक सरल परियोजना है जो react-i18next के उपयोग का प्रदर्शन करने के लिए है। यह ब्राउज़र-डिटेक्टर का उपयोग करता है <1>{{variable}}</1>",
      //     },
      //   },
      // },
      // // Arabic (ar) - Arabic countries
      // ar: {
      //   translations: {
      //     greeting: "مرحبا بالعالم!",
      //     description: {
      //       heading1: "كيف حالك",
      //       paragraph1:
      //         "هذا مشروع بسيط لتوضيح استخدام react-i18next. يستخدم محدد المتصفح لـ <1>{{variable}}</1>",
      //     },
      //   },
      // },
      // // Russian (ru) - Russia
      // ru: {
      //   translations: {
      //     greeting: "Привет, мир!",
      //     description: {
      //       heading1: "Как дела",
      //       paragraph1:
      //         "Это простой проект для демонстрации использования react-i18next. Он использует браузер-детектор для <1>{{variable}}</1>",
      //     },
      //   },
      // },
      // // Portuguese (pt) - Portugal
      // pt: {
      //   translations: {
      //     greeting: "Olá Mundo!",
      //     description: {
      //       heading1: "Como vai você",
      //       paragraph1:
      //         "Este é um projeto simples para demonstrar o uso do react-i18next. Ele usa o detector de navegador para <1>{{variable}}</1>",
      //     },
      //   },
      // },
      // // Bengali (bn) - Bangladesh
      // bn: {
      //   translations: {
      //     greeting: "হ্যালো, বিশ্ব!",
      //     description: {
      //       heading1: "তুমি কেমন আছো",
      //       paragraph1:
      //         "এটি একটি সহজ প্রকল্প যা react-i18next এর ব্যবহার প্রদর্শন করার জন্য। এটি ব্রাউজার-ডিটেক্টর ব্যবহার করে <1>{{variable}}</1>",
      //     },
      //   },
      // },
      // // Japanese (ja) - Japan
      // ja: {
      //   translations: {
      //     greeting: "こんにちは、世界！",
      //     description: {
      //       heading1: "お元気ですか",
      //       paragraph1:
      //         "これは react-i18next の使用法をデモンストレーションするためのシンプルなプロジェクトです。 ブラウザーディテクターを使用しています <1>{{variable}}</1>",
      //     },
      //   },
      // },
      // // Korean (ko) - South Korea
      // ko: {
      //   translations: {
      //     greeting: "안녕하세요, 세계!",
      //     description: {
      //       heading1: "잘 지내니",
      //       paragraph1:
      //         "이것은 react-i18next 사용법을 보여주기 위한 간단한 프로젝트입니다. 브라우저 디텍터를 사용합니다 <1>{{variable}}</1>",
      //     },
      //   },
      // },
      // // Italian (it) - Italy
      // it: {
      //   translations: {
      //     greeting: "Ciao, mondo!",
      //     description: {
      //       heading1: "Come stai",
      //       paragraph1:
      //         "Questo è un semplice progetto per dimostrare l'uso di react-i18next. Utilizza il rilevatore del browser <1>{{variable}}</1>",
      //     },
      //   },
      // },
      // // Turkish (tr) - Turkey
      // tr: {
      //   translations: {
      //     greeting: "Merhaba Dünya!",
      //     description: {
      //       heading1: "Nasılsınız",
      //       paragraph1:
      //         "Bu, react-i18next kullanımını göstermek için basit bir proje. Tarayıcı tespitçisini kullanıyor <1>{{variable}}</1>",
      //     },
      //   },
      // },
    },
    fallbackLng: "en", // when the key is missing
    debug: true,
    returnObjects: true, // so it does not try to stringify objects
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    // lng: "en",
    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
