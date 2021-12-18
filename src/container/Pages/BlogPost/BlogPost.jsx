import React, { Component, Fragment } from 'react';
import BlogPostComp from '../../../component/BlogPostComp/BlogPostComp';
import './BlogPost.css';
import axios from 'axios';
import API from '../../../service';

class BlogPost extends Component {
    state = {
        post: [],
        comments: [],
        formBlogPost: {
            userId: 10,
            id: 1,
            title: '',
            body: '',
        },
        isUpdate: false,
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    getPostAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })
        API.getComments().then(result => {
            this.setState({
                comments: result
            })
        })
    }

    handlePost = (event) => {
        let formBlogPostNew = { ...this.state.formBlogPost }
        let timestamp = new Date().getTime()
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp
        }
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    postDataToAPI = () => {
        API.postNewsBlog(this.state.formBlogPost).then((res) => {
            this.getPostAPI()
            this.setState({
                formBlogPost: {
                    userId: 10,
                    id: 1,
                    title: '',
                    body: '',
                },
            })
        })
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
        console.log(data)
    }

    putDataToAPI = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then((res) => {
            this.getPostAPI()
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    userId: 10,
                    id: 1,
                    title: '',
                    body: '',
                },
            })
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI()
        } else {
            this.postDataToAPI()
        }
    }

    handleRemove = (data) => {
        API.deleteNewsBlog(data).then(res => {
            this.getPostAPI();
        })
    }

    componentDidMount() {
        this.getPostAPI()
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" value={this.state.formBlogPost.title} onChange={this.handlePost} />
                    <label htmlFor="body">Description</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add description" value={this.state.formBlogPost.body} onChange={this.handlePost}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* {
                    this.state.comments.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return <BlogPostComp key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }
            </Fragment >
        )
    }
}

export default BlogPost
