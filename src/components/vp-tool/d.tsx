import { defineComponent, ref } from "vue";
import { ElDialog } from "element-plus";
const Dialog = (slot: any) => {
  console.log(slot);

  return (
    <ElDialog title="弹框标题" modelValue={true}>
      {/*这里就是默认插槽*/}
    </ElDialog>
  );
};

export default Dialog;
