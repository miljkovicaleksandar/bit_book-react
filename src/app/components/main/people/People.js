import React from 'react';
import Search from './Search';
import PeopleList from './PeopleList';
import { fetchUsers } from './../../../../services/userService';
import Loader from '././../../Loader';


class People extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            people: null,
            searchValue: ""
        }

        this.searchUser = this.searchUser.bind(this)
    }


    onloadFetchUsers() {
        fetchUsers().then((response) => {
            this.setState({ people: response });
        })
    }

    searchUser(e) {
        this.setState({ searchValue: e.target.value })
    }

    componentDidMount() {
        this.onloadFetchUsers();
    }

    render() {
        if (!this.state.people) {
            return <Loader/>
        }
        const people = this.state.people.filter((element) => {
            return `${element.firstName}${element.lastName}`.toLowerCase().includes(this.state.searchValue.toLowerCase());
        })
        return (
            <div className="padding-top">
                <Search searchUser={this.searchUser} />
                <PeopleList people={people} />
            </div>

        )
    }

}

export default People;

