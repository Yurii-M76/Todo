import React from "react";
import { Montserrat } from "next/font/google";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import "@mantine/core/styles.css";
import "@/styles/global.css";
import { theme } from "../theme";

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
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={montserratFont.variable}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <div className={"container"}>{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}
