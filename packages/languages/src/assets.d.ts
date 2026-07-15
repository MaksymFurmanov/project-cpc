declare module "*.webp" {
    const src: {
        src: string;
        height: number;
        width: number;
        blurDataURL?: string;
        blurWidth?: number;
        blurHeight?: number;
    };

    export default src;
}