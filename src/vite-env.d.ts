declare module '*.svg' {
    const content: React.FC<React.SVGProps<SVGElement>>
    export default content
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}