import React from 'react';
import './bootstrap-tailwind/index.scss';

function App() {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Bootstrap 4 to Tailwind CSS Framework</h1>
        <p className="lead">
          A comprehensive SCSS framework that allows Bootstrap 4 websites to run seamlessly on Tailwind CSS 
          without changing any HTML class names.
        </p>
        <hr className="my-4" />
        <p>
          This framework provides full compatibility between Bootstrap 4 components and Tailwind CSS utilities, 
          enabling easy migration while maintaining existing markup.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Get Started
        </button>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Component Library</h5>
              <p className="card-text">
                Complete implementation of Bootstrap 4 components using Tailwind CSS utilities.
              </p>
              <button className="btn btn-success">Learn More</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Grid System</h5>
              <p className="card-text">
                Fully responsive grid system with all Bootstrap 4 breakpoints and utilities.
              </p>
              <button className="btn btn-info">Explore</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Easy Migration</h5>
              <p className="card-text">
                Drop-in replacement for Bootstrap 4 CSS with zero HTML changes required.
              </p>
              <button className="btn btn-warning">Try Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2>Alert Examples</h2>
        <div className="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
        <div className="alert alert-success" role="alert">
          This is a success alert—check it out!
        </div>
        <div className="alert alert-warning" role="alert">
          This is a warning alert—check it out!
        </div>
        <div className="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>
      </div>

      <div className="mt-5">
        <h2>Button Examples</h2>
        <div className="btn-group" role="group" aria-label="Button group example">
          <button type="button" className="btn btn-primary">Primary</button>
          <button type="button" className="btn btn-secondary">Secondary</button>
          <button type="button" className="btn btn-success">Success</button>
          <button type="button" className="btn btn-danger">Danger</button>
        </div>
      </div>

      <div className="mt-5">
        <h2>Badge Examples</h2>
        <span className="badge badge-primary">Primary</span>
        <span className="badge badge-secondary">Secondary</span>
        <span className="badge badge-success">Success</span>
        <span className="badge badge-danger">Danger</span>
        <span className="badge badge-warning">Warning</span>
        <span className="badge badge-info">Info</span>
        <span className="badge badge-pill badge-dark">Pill Badge</span>
      </div>

      <div className="mt-5">
        <h2>Form Example</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      <div className="mt-5">
        <h2>Table Example</h2>
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-5">
        <h2>Progress Bar Example</h2>
        <div className="progress mb-3">
          <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <div className="progress mb-3">
          <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <div className="progress mb-3">
          <div className="progress-bar bg-info progress-bar-striped" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <h2>Pagination Example</h2>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex={-1}>Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;