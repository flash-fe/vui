
/**
 * v-debounce
 * <div
 *  v-debounce=""
 * />
 */
const debounce = {
    inserted(el: HTMLElement, binding: any) {

        let timer: any = null;
        const { arg, value } = binding;

        el.addEventListener(arg, handle);
        
        function handle() {
            clearTimeout(timer);
            timer = setTimeout(() => {
                binding.value();
            }, 300)
        }
    }
}

export default debounce