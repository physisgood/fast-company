import React, {useState} from "react";
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(user => user._id !== userId))
    }

    const renderPhrase = (number) => {
        return number > 4 || number === 1 ? 'человек тусанёт' : 'человека тусанут'
    }

    const renderQualityName = (user) => {
        return user.qualities.map((quality) => (
            <span className={`badge bg-${quality.color} m-1`}>{quality.name}</span>
        ))
    }

    const renderUser = (users) => {
        return users.map((user) => (
            <>
                <tr key={user.name + ' 1'}>

                    <td key={user.name}>
                        {user.name}
                    </td>

                    <td key={user.qualities[0]._id}>
                        {renderQualityName(user)}
                    </td>

                    <td key={user.profession.name}>
                        {user.profession.name}
                    </td>

                    <td key={user.completedMeetings}>
                        {user.completedMeetings}
                    </td>

                    <td key={user.rate}>
                        {user.rate + '/5'}
                    </td>

                    <td key={user.name + ' delete'}>
                        <button key={user.name + ' deleteBtn'}
                                className={'btn btn-danger'}
                                onClick={() => handleDelete(user._id)}
                        >
                            delete
                        </button>
                    </td>
                </tr>
            </>
        ))
    }
    return (
        users.length > 0 ?
            <>
                <span className={`badge bg-primary`}>{users.length} {renderPhrase(users.length)} с тобой сегодня</span>
                <div className={"table-responsive"}>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встрелитлся, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col"> </th>
                        </tr>
                        </thead>
                        <tbody>
                        {renderUser(users)}
                        </tbody>
                    </table>
                </div>
            </>
            :
            <>
                <span className={`badge bg-danger`}>Никто не тусанёт с тобой сегодня</span>
            </>
    )
}

export default Users