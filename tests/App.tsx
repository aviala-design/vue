import { defineComponent, ref } from "vue";
import { MButton, MInput, MInputLabel, MSpinner } from "../src"

export default defineComponent({
  name: "App",
  setup() {
    const times = ref(0)
    const btnOnclick = () => times.value += 1

    return () => (
      <>
        <h1>Click times: {times.value}</h1>
        <MButton onClick={btnOnclick}>Click me!</MButton>
        <MInput type="password" placeholder="Enter your password"></MInput>
      </>
    )
  }
})