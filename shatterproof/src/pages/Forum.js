import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Forum.css';


class Forum extends React.Component {
    render() {
        return (
            <div>
                <div className="Title"> 
                  <p> FORUM </p>
                </div>
                <div className="ParentConv">

                <div className="Conv1">
                    <p> Jeff2080: I was wondering if any of you have been to xx treatment service </p>
                </div>

                <div className="Conv2">
                    <p> Down43: I have. I wouldn't recommend it. It was too expensive. There are better alternatives </p>
                </div>

                <div className="Conv3">
                    <p> Jeff2080: Could you elaborate? I need more opinions </p>
                </div>
                <div className="Conv4">
                    <p> dogLover243: I agree with Jeff2080. YY is better. I'm on the road to recovery! </p>
                </div>
                <div className="Conv5">
                    <p> Jeff2080: Thanks, guys. I'll look into it </p>
                </div>

                </div>
                <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                />

            </div>
        );
    }
}

export default Forum;