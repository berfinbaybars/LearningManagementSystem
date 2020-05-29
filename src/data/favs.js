import { Plugins } from '@capacitor/core'

const { Storage } = Plugins

const email = sessionStorage.getItem('email')

let favs = []

export const allFavs = []


const getFavs = async() => {
    let ret = await Storage.get({ key: 'fav' })
    /* let value = JSON.stringify(ret.value) 
    let fav = JSON.parse(JSON.parse(value)); */
    let fav = JSON.parse(ret.value)
    if(fav){
        console.log(fav)
        fav.map(f => {
            if(f.email === email){
                favs.push(f)
            }
        })
        fav.map(f => {
            allFavs.push(f)
        })
    }
    console.log(favs)
}

getFavs()
console.log(favs)

export const setFavs = async(email,cl) => {
    let newFav = {
        email,
        cl
    }
    if(favs ===null){
        Storage.set({key:'fav',
        value:JSON.stringify({
            email,
            cl
        })})
    }else {
        favs.push(newFav)
        Storage.set({key:'fav',value: JSON.stringify(favs)})
    }
    console.log(favs)
}

export const delFavs = async(email,cl) => {
    if(favs !== null){
        favs.forEach((fav,i) => {
            if(fav.email === email && fav.cl === cl){
                favs.splice(i)
                console.log(favs)
            }
        })
        Storage.set({key:'fav',value: JSON.stringify(favs)})
    }
}

export default favs
