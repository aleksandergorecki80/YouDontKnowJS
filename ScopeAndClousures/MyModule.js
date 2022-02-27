const MyModule = (() => {
    
    const list = [];

    addElement = (name)=> {
        this.list = { ...this.list, name}
    }

    getList = () => {
        return this.list;
    }

    return {
        addElement: addElement,
        getList: getList
    }
    
})()
MyModule.addElement('Janek');
const list = MyModule.getList();

console.log(MyModule.list)
console.log(list)
