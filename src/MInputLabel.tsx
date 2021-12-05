import { defineComponent } from "vue";
import style from "./styles/input.module.less"; 

export default defineComponent({
  name: "Mistlight:InputLabel",
  setup(props, ctx) {
    return () => (
      <label class={style['mist-input-label']}>{ctx.slots?.default?.()}</label>
    )
  }
})