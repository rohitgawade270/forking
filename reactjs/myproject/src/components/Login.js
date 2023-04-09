
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';




export default function login() {


    return(
        
              <div class="container">
            <div class="login d-flex justify-content-center align-items-center">
                <div class="row width-75">
                  
                    <div class="col-xl-6 bg-img d-flex text-light p-3 flex-column text-align-center justify-content-center align-items-center rounded-start">
                    
                            <h4>Welcome to company_name</h4>
                            <p>Don't have an account?</p>
                            <a href="#" class="btn btn-outline-light">Sign up</a> 
                      
 
                    </div>
                    <div class="col-xl-6 rounded-end bg-light p-5">
                        <h2 class="text-center">Login</h2>
                        <form class="login-form">
                            <div class="mb-2">
                                <label for="userid" class="form-label">User Id</label>
                             <input type="text" class="form-control rounded-pill" id="userid" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control rounded-pill" id="password" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <button class="btn btn-success">Login</button>
                              <a href="home.html" class="btn btn-success w-100 rounded-pill">Login</a>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="saveDet"/>
                                    <label class="form-check-label" for="saveDet">Remember me</label>
                                  </div>
                                  <div>
                                    <a href="#" class="text-decoration-none text-dark text-muted">Forget password</a>
                                  </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>

     

              

    )

}