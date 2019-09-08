import React from "react";
import './style.css';

const Carousel = () => {
    return (
        <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">NW Fall Workshop</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Have Fun</h6>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam esse quam quidem, ducimus voluptate autem tempora facere sapiente iusto deleniti? Nam libero numquam reiciendis dignissimos porro fugit quidem in veritatis.</p>
                                <a href="espn.com" className="card-link">Card link</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">NW Spring Workshop</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Have Fun</h6>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam esse quam quidem, ducimus voluptate autem tempora facere sapiente iusto deleniti? Nam libero numquam reiciendis dignissimos porro fugit quidem in veritatis.</p>
                                <a href="espn.com" className="card-link">Card link</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">NW Fall Workshop</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Have Fun</h6>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam esse quam quidem, ducimus voluptate autem tempora facere sapiente iusto deleniti? Nam libero numquam reiciendis dignissimos porro fugit quidem in veritatis.</p>
                                <a href="espn.com" className="card-link">Card link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel;