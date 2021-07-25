import React, { Component } from 'react';
import Menu from './MenuComponenet';
import DishDetail from './DishDetail';
import Header from './Header';
import Footer from './footer';
import Home from './Home';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Contact from './Contact';
import About from './About';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }


    render() {
        const HomeComponent = () => {
            return <Home
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]} />
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            )
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomeComponent} />
                    <Route path="/menu" exact component={() => <Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
                    <Route path="/contactus" exact component={Contact} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route path="/aboutus" exact component={() => <About leaders={this.props.leaders} />} />
                    <Redirect path="/home" />
                </Switch>
                <Footer />
            </div >
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));