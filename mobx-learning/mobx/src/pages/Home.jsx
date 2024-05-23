import { observer } from "mobx-react-lite"

const Home = ({ store }) => {
    return (
        <div>
            <h1>Home</h1>
            <h2>User Name: {store.userInfo.name}</h2>
            <h2>Total Subjects: {store.totalSubjects}</h2>
            <h2>Subjects: {store.userInfo.subjects.map((item, index)=> <p key={index} >{item}</p>)}</h2>
            <button onClick={store.updateUserDetails}>Update User Details</button>
            <button onClick={store.addSubject}>Add Subject</button>
        </div>
    )
}

export default observer(Home)
