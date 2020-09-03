import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

class Dishdetail extends Component{

    renderDish(dish){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle className="text-center">{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments){
        if (comments != null){
            let dateformat = 
            {
                year: "numeric",
                month: "short",
                day: "numeric"
            };
            return comments.map(comment => (
                <ul key={comment.id} className="list-unstyled">
                    <li className="mb-2">{comment.comment}</li>
                    <li>
                        -- {comment.author}{" , "}
                        {new Date(comment.date).toLocaleDateString("en-US", dateformat)}
                    </li>
                </ul>
            ));
        }   else return <div />;
    }

    render(){
        const { dish } = this.props;
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}
export default Dishdetail;