import { defineComponent } from "vue";
import style from "./styles/spinner.module.less"; 

export default defineComponent({
  name: "Mistlight:Spinner",
  setup(props, ctx) {
    return () => (
      <div class={style['mist-spinner']}></div>
    )
  }
})