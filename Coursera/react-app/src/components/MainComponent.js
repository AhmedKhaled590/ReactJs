import React, { Component } from 'react';
import Menu from './MenuComponenet';
import DishDetail from './DishDetail';
import Header from './Header';
import Footer from './footer';
import Home from './Home';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import Contact from './Contact';
import About from './About';
import { addComment, fetchComments, fetchDishes, fetchLeaders, fetchPromos, postComment, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
    resetFeedbackForm: () => { dispatch(actions.reset("feedback")) },
    postFeedBack: (feedback) => { (postFeedback(feedback)) },
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchLeaders: () => dispatch(fetchLeaders())
})

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

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {
        const HomeComponent = () => {
            console.log(this.props.leaders)
            return <Home
                dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                promoLoading={this.props.promotions.isLoading}
                promoErrMess={this.props.promotions.errMess}
                leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                leadersLoading={this.props.leaders.isLoading}
                leadersErrMess={this.props.leaders.errMess}
            />
        }

        const DishWithId = ({ match }) => {
            console.log()
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    addComment={this.props.addComment}
                    postComment={this.props.postComment}
                />
            )
        };

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route path="/home" component={HomeComponent} />
                            <Route path="/menu" exact component={() => <Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
                            <Route path="/contactus" exact component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedBack={this.props.postFeedBack} />} />
                            <Route path='/menu/:dishId' component={DishWithId} />
                            <Route path="/aboutus" exact component={() => <About
                                leaders={this.props.leaders.leaders}
                                leadersLoading={this.props.leaders.isLoading}
                                leadersErrMess={this.props.leaders.errMess}
                            />} />
                            <Redirect path="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div >
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));