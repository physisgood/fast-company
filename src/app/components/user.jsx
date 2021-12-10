import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ( users ) => {

    return users.arr.arr.map((user) => (
            <tr key={user._id}>

                <td>
                    {user.name}
                </td>

                <td>
                    {user.qualities.map((q) => (
                        <Qualitie {...q}/>
                    ))}
                </td>

                <td>
                    {user.profession.name}
                </td>

                <td>
                    {user.completedMeetings}
                </td>

                <td>
                    {user.rate + '/5'}
                </td>

                <td>
                        <BookMark
                            status={false}
                        />
                </td>

                <td>
                    <button
                        className={'btn btn-danger'}
                        onClick={() => users.onDelete(user._id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        )
    )
}

export default User