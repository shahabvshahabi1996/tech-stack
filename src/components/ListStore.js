import {observable} from 'mobx'

class LibararyList {
    @observable List = require('./LibararyList.json');
    @observable index = null;

    selectedList(index){
        this.index = index
    }
    
}

var Store = new LibararyList

export default Store
