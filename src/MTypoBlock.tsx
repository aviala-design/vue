import { ButtonHTMLAttributes, HTMLAttributes, defineComponent } from "vue";
import typo from "./styles/typo.module.less"; 
console.log(typo)
export default defineComponent<HTMLAttributes>({
  name: "Mistlight:Typo.Block",
  setup(props, ctx) {
    return () => (
      <div class={typo['mist-typo-block']}>{ctx.slots?.default?.()}</div>
    )
  }
})