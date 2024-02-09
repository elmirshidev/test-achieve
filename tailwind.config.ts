import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainPurple" : "#8639fa",
        "textColor": "#262f5a",
        "textBlue" : "#1f2471",
        "textGray" : "#505489"
      },
      fontSize : {
        "small": "15px" ,
      } ,
      boxShadow: {
        "navBoxShadow" : "0 1px 40px 0 rgba(0,0,0,.1)",
        "serviceCardShadow" : "0 0 10px 4px rgba(31,66,135,.1)",
        "serviceCardShadowHover" : "0 0 10px 4px rgba(31,66,135,.2)",

      },
      backgroundColor : {
        "mainbg" : "#f8f5ff",
        "caseBgGray" : "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)"
      },
      screens : {
        "1200" : {'max' : '1200px'},
        "1000" : {'max' : '1000px'},
        "800" : {'max' : '800px'},
        "768" : {'max' : '768px'},
        "600" : {'max' : '600px'},
      },
    },
  },
  plugins: [],
};
export default config;
