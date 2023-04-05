import React from 'react';
import './Navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import img from '../images/copilot.png'

export default function Navbar() {
  return (
    <body>
              <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            
      
            <div class="container">
                <div class="box">
                    <a href="home.html"><img src={img} alt="Logo" width="35" height="35"/></a>
                </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button> 
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active fw-bolder" aria-current="page" href="home.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bolder" href="Capture.html" >Capture</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link fw-bolder" href="Captured List.html">Captured List</a>
                  </li>
                </ul>
                  <a class="btn btn-outline-light" href="/login.html">Log Out</a>
              </div>
            </div>
          </nav>
          <div class="container mt-5">
    <table class="table table-success table-stripped table-bordereds" border = "5px" bordercolor = "black">
        <thead>
          <tr class = "table-primary">
            <th scope="col">Sr.no</th>
            <th scope="col">Receiver Name</th>
            <th scope="col">Company Name</th>
            <th scope ="col">Email ID</th>
            <th scope="col">Mobile No</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          <tr class = "table-light">
            <th scope="row">1</th>
            <td>Rohan Patil</td>
            <td>Teravista.io</td>
            <td>rohanpatil123@gmail.com</td>
            <td>9867456789</td>
            <td>sakinaka</td>
          </tr>
          <tr class = "table-secondary">
            <th scope="row">2</th>
            <td>Aniket Chate</td>
            <td>Teravista.io</td>
            <td>aniketchate321@gmail.com</td>
            <td>8765832122</td>
            <td>ghatkopar</td>
          </tr>
          <tr class = "table-danger">
            <th scope="row">3</th>
            <td>Rohit Gawade</td>
            <td>Teravista.io</td>
            <td>rohitgawade234@gmail.com</td>
            <td>7896543521</td>
            <td>kalyan</td>
          </tr>
          <tr class = "table-info">
            <th scope="row">4</th>
            <td>Sahil Patil</td>
            <td>Sankey Solutions</td>
            <td>sahilP4@gmail.com</td>
            <td>8765083224</td>
            <td>Ambernath</td>
          </tr>
          <tr class = "table-success">
            <th scope="row">5</th>
            <td>Sanket Pawar</td>
            <td>Mindcraft</td>
            <td>sankepaw11@gmail.com</td>
            <td>7645786730</td>
            <td>Dombivli</td>
          </tr>
          <tr class = "table-warning">
            <th scope="row">6</th>
            <td>Adnan Khan</td>
            <td>seclore</td>
            <td>Adnn2123@gmail.com</td>
            <td>9654327831</td>
            <td>Govandi</td>
          </tr>
          <tr class = "table-light">
            <th scope="row">7</th>
            <td>Binit pandey</td>
            <td>fortis</td>
            <td>binitpa2342@gmail.com</td>
            <td>9654864427</td>
            <td>Santacruz</td>
          </tr>
          <tr class = "table-secondary">
            <th scope="row">8</th>
            <td>Samiksha Shelar</td>
            <td>meryware</td>
            <td>samshe789@gmail.com</td>
            <td>9604561229</td>
            <td>Chembur</td>
          </tr>
          <tr class = "table-success">
            <th scope="row">9</th>
            <td>Navnath Nanavare</td>
            <td>Saviour Solutions</td>
            <td>nsvnathNa345@gmail.com</td>
            <td>9864567823</td>
            <td>Sion</td>
          </tr>
          <tr class = "table-warning ">
            <th scope="row">10</th>
            <td>Sandhya Singh</td>
            <td>Velocity</td>
            <td>sandhyas4@gmail.com</td>
            <td>9967453125</td>
            <td>Kalyan</td>
          </tr>
          <tr class = "table-light">
            <th scope="row">11</th>
            <td>Sandeep tiwari</td>
            <td>Hindware Solutions</td>
            <td>ssandti123@gmail.com</td>
            <td>8879675435</td>
            <td>Airoli</td>
          </tr>
          <tr class = "table-secondary">
            <th scope="row">12</th>
            <td>Sandesh Patil</td>
            <td>Vistara</td>
            <td>sandeshpa456@gmail.com</td>
            <td>9980706844</td>
            <td>Andheri</td>
          </tr>
          <tr class = "table-danger">
            <th scope="row">13</th>
            <td>Roshan Madhavi</td>
            <td>credsap</td>
            <td>roshanM125@gmail.com</td>
            <td>8807645728</td>
            <td>Mankhurd</td>
          </tr>
        </tbody>
      </table>
</div>
    </body>
  )
}

