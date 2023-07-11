declare module "*.module.css";
declare module "*.global.css";
declare module 'nanoid' {
  export default function nanoid(size?: number): string;
}