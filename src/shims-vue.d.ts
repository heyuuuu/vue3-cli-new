declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare type OBJ = Record<string|number,any>

declare interface RouterItem {
  name: string
	path: string
	component: (() => Promise<typeof import("*.vue")>) | import("vue").DefineComponent | any
	props?(route: OBJ): OBJ
}

declare const $BRANCH_ENV: "dev" | "test" | "rd" | "pro"