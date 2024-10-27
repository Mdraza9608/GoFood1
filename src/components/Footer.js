import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top tall footer"  style={{ height: '50px' }}>
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="34" aria-label="GoFood logo">
              {/* Insert your logo SVG path here if you have one */}
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </a>
          <span className="text-muted">© 2024 GoFood, Inc</span>
        </div>
          
        <div className="col-md-3 text-center">
        <h5>Contact Us</h5>
        <p>Email: kmdraza47@gmail.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Food Street, Food City</p>
      </div>
       
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="https://twitter.com/profile" target="_blank" rel="noopener noreferrer">
              <svg className="bi" width="34" height="34" aria-label="Twitter icon">
                {/* Twitter SVG Path */}
                <path d="M22.46 6.003c-.79.35-1.64.584-2.53.692a4.46 4.46 0 0 0 1.96-2.476 8.937 8.937 0 0 1-2.828 1.083 4.476 4.476 0 0 0-7.724 4.086A12.74 12.74 0 0 1 1.64 4.7a4.474 4.474 0 0 0 1.382 5.963 4.45 4.45 0 0 1-2.03-.56v.056a4.477 4.477 0 0 0 3.59 4.39 4.468 4.468 0 0 1-2.026.077 4.475 4.475 0 0 0 4.176 3.106 8.966 8.966 0 0 1-5.57 1.922A9.073 9.073 0 0 1 0 19.543a12.658 12.658 0 0 0 6.857 2.008c8.233 0 12.74-6.827 12.74-12.742 0-.194-.003-.388-.01-.58a9.125 9.125 0 0 0 2.243-2.33z" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <svg className="bi" width="34" height="34" aria-label="Instagram icon">
                {/* Instagram SVG Path */}
                <path d="M12 2.163c3.2 0 3.584.012 4.85.07 1.2.055 1.926.24 2.386.406a4.78 4.78 0 0 1 1.656 1.012 4.78 4.78 0 0 1 1.012 1.656c.166.46.35 1.186.405 2.386.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.2-.24 1.926-.406 2.386a4.78 4.78 0 0 1-1.012 1.656 4.78 4.78 0 0 1-1.656 1.012c-.46.166-1.186.35-2.386.405-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.2-.055-1.926-.24-2.386-.406a4.78 4.78 0 0 1-1.656-1.012 4.78 4.78 0 0 1-1.012-1.656c-.166-.46-.35-1.186-.405-2.386C2.174 15.584 2.163 15.2 2.163 12s.012-3.584.07-4.85c.055-1.2.24-1.926.406-2.386a4.78 4.78 0 0 1 1.012-1.656 4.78 4.78 0 0 1 1.656-1.012c.46-.166 1.186-.35 2.386-.405C8.416 2.174 8.8 2.163 12 2.163m0-2.163C8.74 0 8.332.012 7.053.07c-1.306.06-2.198.26-2.965.558a6.962 6.962 0 0 0-2.516 1.66A6.962 6.962 0 0 0 .569 5.306C.27 6.072.07 6.964.007 8.27.012 9.548 0 9.956 0 12s.012 2.452.07 3.73c.06 1.306.26 2.198.558 2.965a6.962 6.962 0 0 0 1.66 2.516 6.962 6.962 0 0 0 2.516 1.66c.767.297 1.659.497 2.965.558C8.332 23.988 8.74 24 12 24s3.668-.012 4.947-.07c1.306-.06 2.198-.26 2.965-.558a6.962 6.962 0 0 0 2.516-1.66 6.962 6.962 0 0 0 1.66-2.516c.297-.767.497-1.659.558-2.965C23.988 15.668 24 15.26 24 12s-.012-2.452-.07-3.73c-.06-1.306-.26-2.198-.558-2.965a6.962 6.962 0 0 0-1.66-2.516 6.962 6.962 0 0 0-2.516-1.66c-.767-.297-1.659-.497-2.965-.558C15.668.012 15.26 0 12 0z" />
              </svg>
            </a>
          
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <svg className="bi" width="34" height="34" aria-label="Facebook icon">
                {/* Facebook SVG Path */}
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82V14.708h-3.2v-3.62h3.2V8.134c0-3.149 1.918-4.868 4.719-4.868 1.343 0 2.499.099 2.835.144v3.287l-1.944.001c-1.524 0-1.82.725-1.82 1.785v2.338h3.637l-.474 3.62h-3.163V24h6.207C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

