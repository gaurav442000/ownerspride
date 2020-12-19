import React from 'react'
import { Link } from 'react-router-dom';
import "./Jeep.css";
import Footer from "./components/Footer"



export const Car = () => (
  <div>
    <div className="pw">
    <div class="waveWrapper waveAnimation">
  <div class="waveWrapperInner bgTop">
    <div class="wave waveTop" ></div>
  </div>
  <div class="waveWrapperInner bgMiddle">
    <div class="wave waveMiddle" ></div>
  </div>
  <div class="waveWrapperInner bgBottom">
    <div class="wave waveBottom" ></div>
  </div>
</div>
    </div>
    <div className="fff">
    <div class="body">
  <div id="container"></div>

    <div class="flip-card" on-click="toggle('flipCard')"></div>
    <div class="contact-wrapper">
        <div class="envelope {{ flipCard ? 'active' : '' }}">
          <div class="back paper"></div>
          <div class="content">
            <div class="form-wrapper">
              <form>
                <div class="top-wrapper">
                  <div class="input">
                    <label>Name</label>
                    <input type="text" name="name"/>
                  </div>
                  <div class="input">
                    <label>Phone</label>
                    <input type="text" name="phone"/>
                  </div>
                  <div class="input">
                    <label>Email</label>
                    <input type="text" name="_replyto"/>
                  </div>
                </div>
                <div class="bottom-wrapper">
                  <div class="input">
                    <label>Subject</label>
                    <input type="text" name="_subject"/>
                  </div>
                  <div class="input">
                    <label>Message</label>
                    <textarea rows="5" name="message"></textarea>
                  </div>
                  <div class="submit">
                    <div class="submit-card" on-click="toggle('flipCard')">Send Mail</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="front paper"></div>
        </div>
      </div>
</div>
</div>
<Footer />
</div>

)