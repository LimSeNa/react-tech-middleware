import {useEffect} from "react";
import Sample from "../modules/sample";
import {connect} from "react-redux";
import {getPost, getUsers} from "../lib/api";

const SampleContainer = ({
                             getPost,
                             getUsers,
                             post,
                             users,
                             loadingPost,
                             loadingUsers
                         }) => {
    useEffect(() => {
        getPost(1);
        getUsers(1);
    }, [getPost, getUsers]);

    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}/>
    );
};

export default connect(
    ({ sample }) => ({
        post: sample.post,
        user: sample.users,
        loadingPost: sample.loading.GET_POST,
        loadingUsers: sample.loading.GET_USERS
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);