import { observable, action } from 'mobx';

const adminStore = observable({
    
    adminLogin: 'admin',
    adminPassword: '123',

    editTitle: '',
    editDescription: '',
    editPrice: '',
    editCategory: '',
    editNewCategory: '',

    isAdmin: false,

    checkAdmin: action((login: string, password: string) => {
        if (adminStore.adminLogin === login && adminStore.adminPassword === password) adminStore.isAdmin = true;
        else adminStore.isAdmin = false;
    }),

    setIsAdmin: action((state: boolean) => {
        adminStore.isAdmin = state;
    })
    
})

export default adminStore;