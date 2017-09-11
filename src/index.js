import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EmployeePage from './EmployeePage';
import employeeService from "./employeeService";
import router from "./router";
import registerServiceWorker from './registerServiceWorker';


router.addRoute('', function() {
  ReactDOM.render(
    <App service={employeeService} />,
    document.getElementById('root')
  );
});

router.addRoute('employees/:id', function(id) {
  ReactDOM.render(
    <EmployeePage employeeId={id} service={employeeService} />,
    document.getElementById('root')
  );
});
router.start();

// ReactDOM.render(<App service={employeeService} />, document.getElementById('root'));
registerServiceWorker();
