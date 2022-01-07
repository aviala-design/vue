import { ButtonHTMLAttributes, defineComponent } from "vue";
import style from "./styles/button.module.less"; 

export default defineComponent<ButtonHTMLAttributes>({
  name: "Mistlight:Button",
  setup(props, ctx) {
    return () => (
      <button v-slots={ctx.slots} class={style['mist-button']}>{ctx.slots?.default?.()}</button>
    )
  }
})