import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Col, Label, Modal, ModalBody, ModalHeader, Row, Button
} from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Stagger } from 'react-animation-components'



const maxLength = (len) => (val) => !val || (val.length <= len)
const minLength = (len) => (val) => val && (val.length >= len)

export class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isModalOpen: false,
        }
    }
    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    handleSubmit(values) {
        this.toggleModal();
        console.log(values)
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);

    }

    render() {
        return (
            <>
                <Button onClick={this.toggleModal} outline><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Col md={{ size: 12 }}>
                                <Row className="form-group">
                                    <Label >Rating</Label>
                                    <Control.select model=".rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Row>
                            </Col>

                            <Col md={{ size: 12 }}>
                                <Row className="form-group">
                                    <Label>Your Name</Label>
                                    <Control.text className="form-control" model=".author" placeholder="Your Name" validators={{ maxLength: maxLength(15), minLength: minLength(3) }}></Control.text>
                                    <Errors className="text-danger" model=".author" show="touched" messages={{
                                        maxLength: "Must be less than 15 characters",
                                        minLength: "Must be greater than 2 characters"
                                    }}></Errors>
                                </Row>
                            </Col>

                            <Col md={{ size: 12 }}>
                                <Row className="form-group">
                                    <Label>Comment</Label>
                                    <Control.textarea className="form-control" model=".comment" rows="6"></Control.textarea>
                                </Row>
                            </Col>

                            <Row className="form-group">
                                <Col md={{ size: 10 }}>
                                    <Button className="btn btn-lg" type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}


function DishDetails(props) {
    console.log(props.dish)
    function RenderCommentForm() {
        return (<CommentForm postComment={props.postComment}
            dishId={props.dish.id} />)
    }
    function RenderComments({ comments }) {
        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h1>Comments</h1>
                    <Stagger in>

                        {comments.map((com) => {
                            return (
                                <React.Fragment key={com.id}>
                                    <p>{com.comment}</p>
                                    <p>--{com.author} , {new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit'
                                    }).format(new Date(com.date))}</p>
                                </React.Fragment>
                            )
                        })

                        }
                    </Stagger>
                    <RenderCommentForm
                    />

                </div>
            )
        }
        else
            return <div></div>
    }

    function RenderDish() {
        if (props.dish != null) {
            return (
                <div key={props.dish.id} className="col-12 col-md-5 m-1">
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card>
                            <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name} />
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            );
        }
        else
            return <div></div>
    }
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (

            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
}

export default DishDetails


