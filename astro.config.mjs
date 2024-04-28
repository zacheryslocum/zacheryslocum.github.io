import { defineConfig } from 'astro/config';

// https://github.com/natemoo-re/astro-icon
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [icon({
        include: {
            mdi: ["*"], // (Default) Loads entire Material Design Icon set
        }
    })]
});