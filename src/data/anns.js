import { Plugins } from '@capacitor/core'
import favs from './favs'


const { Storage } = Plugins

let anns = []
export const allAnns = []

export const getAnns = async() => {
    let ret = await Storage.get({ key: 'ann' })
    let value = JSON.stringify(ret.value) 
    let announces = JSON.parse(JSON.parse(value));
    if(announces){
        console.log(announces)
        announces.map(ann => {
            favs.map(fav => {
                console.log(fav, ann)
                if(ann.cl === fav.cl){
                    anns.push(ann)
                }
            })
            allAnns.push(ann)
        })
    }
    
}
getAnns()

export const setAnns = async(text,cl) => {
    let newAnn = {
        text,
        cl
    }
    if(allAnns === null){
        Storage.set({key:'ann',
        value:JSON.stringify({
            text,
            cl
        })})
    }else {
        allAnns.push(newAnn)
        Storage.set({key:'ann',value: JSON.stringify(allAnns)})
    }
    console.log(anns)
}

export default anns