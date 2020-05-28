import { Plugins } from '@capacitor/core'

const { Storage } = Plugins

let anns = []
  
const getAnns = async() => {
    let ret = await Storage.get({ key: 'ann' })
    let value = JSON.stringify(ret.value) 
    let announces = JSON.parse(JSON.parse(value));
    if(announces){
        announces.map(ann => {
            anns.push(ann)
        })
    }
    
}

getAnns()
export default anns