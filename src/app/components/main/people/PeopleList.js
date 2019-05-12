import React from 'react';
import SingleUser from './SingleUser';

const PeopleList = (props) => {

    if (!props.people.length) {
        return (<div className="center">
            <i className="fas fa-exclamation-triangle padding-top"></i>
            <h2>No match found</h2>
        </div>)
    }

    return (
        <ul className="collection">
            {props.people.map((user, index) => {
                const { description, firstName, lastName, photo, postTime, id } = user;
                return <SingleUser key={index} description={description} firstName={firstName} lastName={lastName} photo={photo} postTime={postTime} id={id} />
            })}

        </ul>
    )
}


export default PeopleList;