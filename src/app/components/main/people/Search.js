import React from 'react';


const Search = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <form className="input-style">
                    <div className="input-field">
                        <input id="search" type="search" required onChange={props.searchUser} placeholder="Search for users..." />
                        <label className="label-icon" htmlFor="search"><i className="fas fa-search " id="search-magnifier"></i></label>

                    </div>
                </form>
            </div>
        </nav>
    )
}


export default Search;