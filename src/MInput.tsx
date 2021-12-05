import { defineComponent } from "vue";
import style from "./styles/input.module.less"; 

export default defineComponent({
  name: "Mistlight:Input",
  setup(props, ctx) {
    return () => (
      <input v-slots={ctx.slots} class={style['mist-input']}>{ctx.slots?.default?.()}</input>
    )
  }
})