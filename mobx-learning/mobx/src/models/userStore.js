import {
  action,
  computed,
  makeAutoObservable,
  runInAction,
  autorun,
  observable,
} from "mobx";

class userStore {
  userInfo = {
    id: "c12ksd",
    name: "Ali",
    subjects: ["English", "Math", "Physics"],
  };

  constructor() {
    makeAutoObservable(this, {
      userInfo: observable,
      totalSubjects: computed,
      updateUserDetails: action,
      addSubject: action,
    });
    autorun(() => this.logUserDetails());
    runInAction(() => this.prefetchData());
  }

  logUserDetails = () => {
    console.log(
      "User Details",
      this.userInfo,
      "Total Subjects",
      this.totalSubjects
    );
  };

  prefetchData = () => {
    console.log("Prefetching Data", this.userInfo);
  };

  get totalSubjects() {
    return this.userInfo.subjects.length;
  }

  addSubject = () => {
    this.userInfo.subjects.push("Chemistry");
  };

  updateUserDetails = () => {
    this.userInfo.name = "Ali Asghar";
    // this.userInfo.subjects.push("Chemistry");
  };

}

export default userStore;
