export const EndPoints = {
    userController : {
      authenticate: '/users/authenticate',
      getAllUsers: '/users/GetAll',
      userRegister: '/users/Register',  
      login: 'api/login',
      getUserById: '/users/GetById/',
      register: '/users/Register',
      update: '/users/Update/',
      delete: '/users/Delete/'
    }

};

export const MenuRoutes: Object[] = [{
    icon: 'home',
    route: '/home',
    title: 'Home'    
  }, {
    icon: 'Products',
    route: '/products',
    title: 'Products',
  }, {
    icon: 'Login',
    route: '/login',
    title: 'Login',
  }
];

export const ApplicationSettings = {
  Title: 'Mauss Designs'   
 };