import { defineComponent } from "vue";
import style from "./styles/button.module.less"; 

export default defineComponent({
  name: "Mistlight:Button",
  emits: ["click"],
  setup(props, ctx) {
    return () => (
      <button v-slots={ctx.slots} class={style['mist-button']}>{ctx.slots?.default?.()}</button>
    )
  }
})