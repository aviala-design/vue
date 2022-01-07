import { defineComponent, ref } from "vue";
import { MButton, MInput, MInputLabel, MSpinner, MTypoBlock } from "../src"

import { LoremIpsum } from 'lorem-ipsum'

export default defineComponent({
  name: "App",
  setup() {
    const times = ref(0)
    const btnOnclick = () => times.value += 1

    const ipsum = new LoremIpsum()

    return () => (
      <MTypoBlock style={{
        paddingInline: '10vw'
      }}>
        <h1>Lorem Ipsum</h1>
        <h6>{ipsum.generateParagraphs(1)}</h6>
        <p>{ipsum.generateParagraphs(1)}</p>
        <p>{ipsum.generateParagraphs(1)}</p>
        <p>{ipsum.generateParagraphs(1)}</p>
        <p>Click times: {times.value}</p>
        <MButton onClick={btnOnclick}>Click me!</MButton>
        <MSpinner></MSpinner>
        {/* <MInput type="password" placeholder="Enter your password"></MInput> */}
      </MTypoBlock>
    )
  }
})