import React from 'react';
import image from '../../../images/Mask Group 3.png'

const FeatureService = () => {
    return (
        <section className='feature-service pt-5'>
            <div className='row justify-content-center p-5' style={{margin:'0px'}}>
                <div className="col-md-4 ">
                    <img style={{height:'500px'}} src={image} alt="" className='img-fluid'/>
                </div>
                <div className="col-md-6 align-self-center">
                    <h2>Exceptional Dental <br></br>Care, On your term</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur velit minus, illo eos impedit ducimus temporibus repudiandae laboriosam adipisci, non asperiores facilis eaque perspiciatis quam laborum dolor mollitia esse dicta!
                    Quo, provident fugiat. Aspernatur molestias cumque, eum doloribus nulla velit sit repudiandae nam quibusdam vitae totam recusandae sint vero! Tempora eveniet voluptatibus sint perspiciatis. Facere quasi corrupti dolor omnis dolores?
                    Alias, saepe. Doloribus a hic est debitis amet blanditiis animi assumenda. Consectetur hic iure, iusto alias asperiores cumque sint sit fugit ex earum perferendis explicabo nesciunt modi aperiam sed perspiciatis?</p>
                    <button className='btn btn-king'>Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;