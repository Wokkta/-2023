import { makeObservable, observable, action } from 'mobx';


interface IUser {
    name: string;
    courses: string[];
}
class UserStore {
  user:IUser[] = [];

  constructor() {
    makeObservable(this, {
      user: observable,
      setUser: action,
    });
  }

  setUser(user:IUser[]) {
    console.log('setting duser', user.length);
    this.user = user;
    console.log('setted duser', user.length);

    /* example of using
(async () => {
      console.log('fetching');
      try {
        const departmentsData = await useFetchDepartments();
        console.log(departmentsData);
        departmentStore.setDepartments(departmentsData);
      } catch (error) {
        console.error(error);
      }
    })()
    */
  }
}

const userStore = new UserStore();
export default userStore;