import {action, makeObservable, observable, computed} from "mobx";

class UserStoreImpl {
    users = [
        {name: "Donald", nickname: "villy", id: 1},
        {name: "Jerry", nickname: "jerrytech", id: 2},
        {name: "Joodie", nickname: "jade", id: 3}
    ]
    constructor() {
        makeObservable(this, {
            users: observable,
            addUser: action,
            removeUser: action,
            filterById: computed,
            resetFilter: computed
        });
    }

    addUser(user) {
       this.users.unshift(user);
    }
    get resetFilter() {
        return this.users.sort((a, b) => a.id - b.id);
    }
    get filterById() {
        return this.users.sort((a, b) => b.id - a.id);
    }
    removeUser(userId) {
        this.users = this.users.filter((user) => user.id !== userId)
    }
}

export const UserStore = new UserStoreImpl();