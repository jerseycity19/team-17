import React from 'react';
import './Forum.css';

class Forum extends React.Component {
    render() {
        return (
            <div>
                <div className="Title"> 
                  <p> FORUM </p>
                </div>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>

            </div>
        );
    }
}

export default Forum;