import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


function DishDetails(props) {
    console.log(props)
    function RenderComments({ comments }) {
        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h1>Comments</h1>
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
                    <Card>
                        <CardImg top src={props.dish.image} alt={props.dish.name} />
                        <CardBody>
                            <CardTitle>{props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else
            return <div></div>
    }

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

export default DishDetails


