import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faGlobe, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = (prop) => {
    return(
        <div className='BookBG' style={{/*height:'100%'*/}}>
            <div class="head-contact">
                <h4 class="pre-title">Got a Question?</h4>
                {/* <h1>Contact</h1> */}
                <h1>Idior Book Store</h1>
                <p>We’re here to help and answer any question you might have. We look forward to hearing from you <span role="img" aria-label="Close">🙂</span></p>
            </div>
            <div class='contact-info-s3 mb-5'>
                <form>
                    <div class="col mb-4">
                        <div class="">
                            <label for="name"><b>Name</b>   </label>
                            <input type="text" class="form-control .w-75" id="name"  name="name"/>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="">
                            <label for="email"><b>Email</b>   </label>
                            <input type="email" class="form-control .w-75"  name="email"/>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="">
                            <label for="contactmsg"><b>Message</b></label>
                            <textarea id="contactmsg" name="contactmsg" class="form-control" rows="4"/>                          
                        </div>
                    </div>
                    <div class="col ">
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary w-25">Submit</button>                         
                        </div>
                    </div>
                </form>
            </div>
            <div class="contact-info">
                <h4>Contact Information</h4>
                <div class="mt-4">
                    <div class="">
                        <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt} size='1x' style={{marginRight:'15px'}} />
                            200/214 Pahonyotin82 Kukot Lumlukka Pratumthanee 
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faGlobe} size='1x' style={{marginRight:'15px'}} />
                            Thailand
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhoneAlt} size='1x' style={{marginRight:'15px'}} />
                            089-070-7106
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} size='1x' style={{marginRight:'15px'}} />
                            pongthawat.m@gmail.com
                        </p>
				    </div>
			    </div>
            </div>
            
        </div>
    )     
}
export default Contact;