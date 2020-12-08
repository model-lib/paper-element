import PaperControlPanel from './paper-control-panel'
import PaperTest from './paper-test'


const components  = [
    PaperControlPanel,
    PaperTest
]
const install = function(Vue, opt={}){
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}


export default {
    install,
    PaperControlPanel,
    PaperTest
}
