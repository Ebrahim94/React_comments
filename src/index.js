import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

let image = faker.image.avatar

const App = () =>{
    return (
        <div className = "ui container comments">
            <ApprovalCard>
            <CommentDetail 
            author="Ebrahim" 
            timeAgo="today at 4:45PM" 
            image={image} 
            text="that is a great blog"/>
            </ApprovalCard>
            <CommentDetail author="Alison" timeAgo="today at 2:00PM" image={image} text="I love this"/>
            <CommentDetail author="Eric" timeAgo="yesterday at 5:00PM" image={image} text="this is awesome"/>
        </div>
        )
}

ReactDOM.render(<App />, document.querySelector('#root'))