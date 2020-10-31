import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );

}

function RenderComments({ comments }) {
    if (comments != null) {
        const styledComments = comments.map((comment) => {
            return (
                <div key={comment.id} className="container">
                    <li>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat("en-US",
                            { year: 'numeric', day: '2-digit', month: 'short' }).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                </div>

            );
        });
        return (
            <ul className="list-unstyled">
                {styledComments}
            </ul>

        );
    }
    else {
        return (
            <div></div>
        );
    }

}

const DishDetail = (props) => {
    const dish = props.dish;
    if (dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments} />
                    </div>

                </div>
            </div>

        );
    }
    else {
        return (
            <div></div>
        );
    }
}


export default DishDetail;