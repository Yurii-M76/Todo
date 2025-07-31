import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import React from "react";
import { Montserrat } from "next/font/google";
import { MantineProvider, mantineHtmlProps } from "@mantine/core";
import { ThemeToggler } from "@/components";
import { theme } from "../theme";
import "@/styles/global.css";

const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "ToDo",
  description: "All cases in one place!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="ru" {...mantineHtmlProps}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="maximum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={montserratFont.variable}>
        <MantineProvider theme={theme}>
          <div className={"container"}>{children}</div>
          <div className="themeToggler">
            <ThemeToggler />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
