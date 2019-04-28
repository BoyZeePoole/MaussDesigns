export const EndPoints = {
    userController : {
      authenticate: '/users/authenticate',
      getAllUsers: '/users/GetAll',
      userRegister: '/users/Register',  
      login: 'api/login',
      getUserById: '/users/GetById/',
      register: '/users/register',
      update: '/users/Update/',
      delete: '/users/Delete/'
    },
    clientProfileController : {
      getAllClients: '/api/ClientProfile/GetAll',
      save: '/api/ClientProfile/Add',  
      getClientById: '/api/ClientProfile/GetById/',
      update: '/api/ClientProfile/Update/',
      delete: '/api/ClientProfile/Delete/'
    },
    productController : {
      getAllProductss: 'api/Products/get',
      save: 'api/Products/add',  
      getProductById: 'api/Products/GetById/',
      update: 'api/Products/Update/',
      delete: 'api/Products/Delete/',
      getProductByTag: 'api/Products/getByTag',
      getProductsByGroupId: 'api/Products/getbygroup'
    },
    groupController : {
      get : 'api/Group/getgroup'
    },
    subscribeController : {
      save : 'api/ClientSubscription/add'
    },
    entityController : {
      getEntityByPageName : 'api/entity/getentity'
    },
    formController : {
      getForm : 'api/form/getform'
    }

};

export const MenuRoutes: Object[] = [{
    icon: 'home',
    route: '/home/shop',
    title: 'About'    
  }, {
    icon: 'gallery',
    route: '/home/gallery',
    title: 'Gallery',
  }, {
    icon: 'dashboard',
    route: '/home/dashboard',
    title: 'Pépinière',
  }, {
    icon: 'Customize',
    route: '/home/customize',
    title: 'Customize',
  }, {
    icon: 'ClientProfile',
    route: 'clientprofile',
    title: 'Client Profile',
  },
  {
    icon: 'ClientProfile',
    route: 'clientprofile',
    title: 'Contact us',
  }, {
    icon: 'icon-Basket_icon',
    route: 'login',
    title: '',
  }
];

export const ApplicationSettings = {
  Title: 'Mauss Designs'   
 };