import React from "react";
import User from "./user";

const Users = ( users ) => {
    return (
                <div className={"table-responsive"} key={'table'}>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встрелитлся, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"> </th>
                        </tr>
                        </thead>
                        <tbody>
                        <User
                            key={'users'}
                            arr = {users}
                            onDelete = {users.onDelete}
                        />
                        </tbody>
                    </table>
                </div>
    )
}

// const Users = () => {
//     const [users, setUsers] = useState(api.users.fetchAll())
//
//     const handleDelete = (userId) => {
//         setUsers(prevState => prevState.filter(user => user._id !== userId))
//     }
//
//     const renderPhrase = (number) => {
//         return number > 4 || number === 1 ? 'человек тусанёт' : 'человека тусанут'
//     }
//
//     const renderQualityName = (user) => {
//         return user.qualities.map((quality) => (
//             <span key={quality._id} className={`badge bg-${quality.color} m-1`}>{quality.name}</span>
//         ))
//     }
//
//     console.log(users)
//
//     const renderUser = (users) => {
//         return users.map((user) => (
//                 <tr key={user._id}>
//
//                     <td>
//                         {user.name}
//                     </td>
//
//                     <td>
//                         {renderQualityName(user)}
//                     </td>
//
//                     <td>
//                         {user.profession.name}
//                     </td>
//
//                     <td>
//                         {user.completedMeetings}
//                     </td>
//
//                     <td>
//                         {user.rate + '/5'}
//                     </td>
//
//                     <td>
//                         <button className={'btn btn-danger'}
//                                 onClick={() => handleDelete(user._id)}
//                         >
//                             delete
//                         </button>
//                     </td>
//                 </tr>
//         ))
//     }
//     return (
//         users.length > 0 ?
//             <>
//                 <span className={`badge bg-primary`}>{users.length} {renderPhrase(users.length)} с тобой сегодня</span>
//                 <div className={"table-responsive"}>
//                     <table className="table">
//                         <thead>
//                         <tr>
//                             <th scope="col">Имя</th>
//                             <th scope="col">Качества</th>
//                             <th scope="col">Профессия</th>
//                             <th scope="col">Встрелитлся, раз</th>
//                             <th scope="col">Оценка</th>
//                             <th scope="col"> </th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {renderUser(users)}
//                         </tbody>
//                     </table>
//                 </div>
//             </>
//             :
//             <>
//                 <span className={`badge bg-danger`}>Никто не тусанёт с тобой сегодня</span>
//             </>
//     )
// }

export default Users