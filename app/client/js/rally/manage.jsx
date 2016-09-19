***REMOVED***
 * Created by YouHan on 2016/9/19.
***REMOVED***
/* @flow***REMOVED***
"use strict";

import React from "react";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: '',
            list: []
        };
    }

    render() {
        return (
            <div className="project-manage">
                this is project
                <input value={this.state.project}/>
                {this.state.list.map((item, key)=> {
                    return <div key={key}>
                        <p>name : {item.name}</p>
                        <p>status : {item.status}</p>
                    </div>
                })}
            </div>
        );
    }
}


class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                this is member
            </div>
        )
    }
}

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                this is team
            </div>
        )
    }
}

class Role extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                this is role
            </div>
        )
    }
}


class Management extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 1 //default Project
        };
    }

    changeStatus(num) {
        if (num) {
            this.setState({
                status: num
            ***REMOVED***
        }
    }

    render() {
        return (
            <div className="manage">
                <div className="manage-header">
                    <ul>
                        <li onClick={this.changeStatus.bind(this, 1)}>Project</li>
                        <li onClick={this.changeStatus.bind(this, 2)}>Team</li>
                        <li onClick={this.changeStatus.bind(this, 3)}>Member</li>
                        <li onClick={this.changeStatus.bind(this, 4)}>Role</li>
                    </ul>
                </div>
                <div>
                    {this.state.status === 1 ? <Project></Project> : null}
                    {this.state.status === 2 ? <Team></Team> : null}
                    {this.state.status === 3 ? <Member></Member> : null}
                    {this.state.status === 4 ? <Role></Role> : null}
                </div>
            </div>
        )
    }
}

export default Management;