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
    orderController : {
      save : 'api/Order/add',
      getByUserId : 'api/Order/getByUserId'
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
    title: 'About',
    sequence: 1
  }, 
  {
    icon: 'fokkol',
    route: '',
    title: 'Kindergarten',
    sequence: 2
  }, 
  {
    icon: 'dashboard',
    route: '/home/dashboard/1',
    title: 'Gallery',
    sequence: 3,
    submenu: 1
  }, 
  {
    icon: 'dashboard',
    route: '/home/customize',
    title: 'Create your own mobile',
    sequence: 4,
    submenu: 1
  }, 
  {
    icon: 'huh',
    route: '',
    title: 'Haus',
    sequence: 5,
  }, 
  {
    icon: 'dashboard',
    route: '/home/haus/2',
    title: 'Gallery',
    sequence: 6,
    submenu: 1
  }
  // ,
  // {
  //   icon: 'Customize',
  //   route: '/home/customize',
  //   title: 'Customise',
  //   sequence: 7
  // }
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