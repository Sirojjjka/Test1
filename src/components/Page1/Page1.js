import React from "react";
import styled from "styled-components";
import Posts from "./Posts";
import Pagination from "../Pagination/Pagination";


const Button = styled.button`
color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color:  "";
  background: aqua;
  border: none;
  border-radius: 3px;
`;


class Page1 extends React.Component {

    findInfo(){
        console.log("findInfo", this.searchInput.value);
        this.props.onFindInfo(this.searchInput.value);
    }

    render() {
        //Get current users
        const indexOfLastUser = this.props.currentPage * this.props.pageSize;
        const indexOfFirstUser = indexOfLastUser - this.props.pageSize;
        const currentPosts = this.props.posts.slice(indexOfFirstUser, indexOfLastUser);

        //Change page
        const paginate = (pageNumber) => this.props.setCurrentPage(pageNumber)
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 0; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (

            <div>
                <div>
                    <Input type="text" ref={(input)=>{this.searchInput=input}}/>
                    <Button onClick={this.findInfo.bind(this)}>Search</Button>
                </div>
                <Posts posts={currentPosts}/>
                <Pagination
                    pageSize={this.props.pageSize}
                    posts={this.props.posts.length}
                    paginate={paginate}/>
            </div>
        )
    }
}


export default Page1;