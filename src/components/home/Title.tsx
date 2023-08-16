import React from "react";

interface TitleProps {}

const Title: React.FC<TitleProps> = () => {
    return (
    <section className='title'>
        <div className="container">
            <div className="content">
                <div className="title-box">
                    <h1>electric bicycles</h1>
                    <p>
                        The Cento10 Hybrid is an electric pedal assist race bike that sets a new, very high standard in the category.
                    </p>
                    <button className="standart-btn">Read more...</button>
                </div>
            </div>
        </div>
    </section>
)};

export default Title;
