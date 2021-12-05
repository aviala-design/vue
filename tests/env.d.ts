import { DefineComponent } from 'vue'

declare module "*.css" {}

declare module "*.png" {
  const e: any;
  export = e
}

declare module "*.svg" {
  const e: any;
  export = e
}

declare module "*.vue" {
  const e: DefineComponent<any>
  export = e
}
