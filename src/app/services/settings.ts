export const EndPoints = {
    userController : {
      authenticate: '/users/authenticate',
      getAllUsers: '/users/GetAll',
      userRegister: '/users/Register',  
      login: 'api/login',
      getUserById: '/users/GetUserByUserId',
      register: '/users/register',
      updateAccount: '/users/updateaccount',
      update: '/users/Update/',
      delete: '/users/Delete/',
      getMenu: 'users/GetMenuByUserId'
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
    },
    customizeController : {
      save : 'api/Customize/add'
    },
    wishlistController : {
      add : 'api/Wishlist/add',
      getAll : 'api/Wishlist/getall',
      delete : 'api/Wishlist/delete',
    }

};

export const MenuRoutes: Object[] = [{
    icon: 'home',
    route: '/home/shop',
    title: 'About'    
  }, {
    icon: 'dashboard',
    route: '/home/dashboard',
    title: 'Pépinière de Bébé',
  }, {
    icon: 'Customize',
    route: '/home/customize',
    title: 'Customise'
  }
  // }, {
  //   icon: 'ClientProfile',
  //   route: 'clientprofile',
  //   title: 'Client Profile',
  // },
  // {
  //   icon: 'ClientProfile',
  //   route: 'clientprofile',
  //   title: 'Contact us',
  // }
];

export const ApplicationSettings = {
  Title: 'Mauss Designs'   
 };