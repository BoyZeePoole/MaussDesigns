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
    },
    colorWheelController : {
      getAll: 'api/ColorWheel/get',
      save : 'api/ColorWheel/add',
      delete: 'api/ColorWheel/delete'
    },
    addressController : {
      getAddressById: 'api/Address/getByUserId',
      save: 'api/Address/add'
    }

};

export const MenuRoutes: Object[] = [{
    icon: 'icon-bird',
    route: '/home/splash',
    title: 'About',
    parentId: null,
    sequence: 1,
    refId: 2
  }, 
  {
    icon: 'icon-pig',
    route: '',
    parentId: null,
    title: 'Kindergarten',
    sequence: 2,
    refId: 10008
  }, 
  {
    icon: 'icon-forward',
    route: '/home/dashboard/1',
    title: 'Gallery',
    parentId: 10008,
    sequence: 3,
    submenu: 1,
    refId: 3
  }, 
  {
    icon: 'icon-forward',
    route: '/home/customize',
    title: 'Create your own mobile',
    parentId: 10008,
    sequence: 4,
    submenu: 1,
    refId: 10011
  }, 
  {
    icon: 'icon-butterfly',
    route: '',
    title: 'Haus',
    parentId: null,
    sequence: 5,
    refId: 10010
  }, 
  {
    icon: 'icon-forward',
    route: '/home/haus/2',
    title: 'Gallery',
    parentId: 10010,
    sequence: 6,
    submenu: 1,
    refId: 5
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