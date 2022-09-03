import { defineComponent, ref,reactive } from "vue";
import { ElDialog,ElButton } from "element-plus";
const Dialog=function(){
 
}

export default defineComponent({
  setup(props, { slots }){
   let modelValue=ref(true);

   const state = reactive({ count: 0 });
    const handleClick = () => {
      modelValue.value=false
    }
    const closed=()=>{
      console.log('closed');
      
    };
    console.log(slots.default());
    
    return ()=>(<ElDialog title="弹框标题" modelValue={modelValue.value} onClosed={closed}>
      <div>
        <div onClick={handleClick}>{slots.default()}</div>
      </div>
  </ElDialog>);
  }
});
