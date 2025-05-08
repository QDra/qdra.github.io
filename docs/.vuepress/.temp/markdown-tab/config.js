import { CodeTabs } from "/Users/mark/Documents/vuepress_learn_project/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_d6cbdfae7c7bf655172c9a0e08b945fa/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/mark/Documents/vuepress_learn_project/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_d6cbdfae7c7bf655172c9a0e08b945fa/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/mark/Documents/vuepress_learn_project/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_d6cbdfae7c7bf655172c9a0e08b945fa/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
