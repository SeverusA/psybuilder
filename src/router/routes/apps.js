export default [
  {
    path: '/apps/calendar',
    name: 'apps-calendar',
    component: () => import('@/views/apps/calendar/Calendar.vue'),
  },
  // *===============================================---*
  // *--------- TODO & IT'S FILTERS N TAGS ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/todo',
    name: 'apps-todo',
    component: () => import('@/views/apps/todo/Todo.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'todo-application',
    },
  },
  {
    path: '/apps/todo/:filter',
    name: 'apps-todo-filter',
    component: () => import('@/views/apps/todo/Todo.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'todo-application',
      navActiveLink: 'apps-todo',
    },
    beforeEnter(to, _, next) {
      if (['important', 'completed', 'deleted'].includes(to.params.filter)) next()
      else next({ name: 'error-404' })
    },
  },
  {
    path: '/apps/todo/tag/:tag',
    name: 'apps-todo-tag',
    component: () => import('@/views/apps/todo/Todo.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'todo-application',
      navActiveLink: 'apps-todo',
    },
    beforeEnter(to, _, next) {
      if (['team', 'low', 'medium', 'high', 'update'].includes(to.params.tag)) next()
      else next({ name: 'error-404' })
    },
  },

  // *===============================================---*
  // *--------- ECOMMERCE  ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/e-commerce/shop',
    name: 'apps-e-commerce-shop',
    component: () => import('@/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue'),
    meta: {
      contentRenderer: 'sidebar-left-detached',
      contentClass: 'ecommerce-application',
      pageTitle: 'Shop',
      breadcrumb: [
        {
          text: 'ECommerce',
        },
        {
          text: 'Shop',
          active: true,
        },
      ],
    },
  },
  {
    path: '/apps/e-commerce/wishlist',
    name: 'apps-e-commerce-wishlist',
    component: () => import('@/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue'),
    meta: {
      pageTitle: 'Wishlist',
      contentClass: 'ecommerce-application',
      breadcrumb: [
        {
          text: 'ECommerce',
        },
        {
          text: 'Wishlist',
          active: true,
        },
      ],
    },
  },
  {
    path: '/apps/e-commerce/:slug',
    name: 'apps-e-commerce-product-details',
    component: () => import('@/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue'),
    meta: {
      pageTitle: 'Product Details',
      contentClass: 'ecommerce-application',
      breadcrumb: [
        {
          text: 'ECommerce',
        },
        {
          text: 'Shop',
          active: true,
        },
        {
          text: 'Product Details',
          active: true,
        },
      ],
    },
  },

  // *===============================================---*
  // *--------- USER ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/users/list',
    name: 'apps-users-list',
    component: () => import('@/views/apps/user/users-list/UsersList.vue'),
  },
  {
    path: '/apps/users/view/:id',
    name: 'apps-users-view',
    component: () => import('@/views/apps/user/users-view/UsersView.vue'),
  },
  {
    path: '/apps/users/edit/:id',
    name: 'apps-users-edit',
    component: () => import('@/views/apps/user/users-edit/UsersEdit.vue'),
  },

  // Invoice
  {
    path: '/apps/invoice/list',
    name: 'apps-invoice-list',
    component: () => import('@/views/apps/invoice/invoice-list/InvoiceList.vue'),
  },
]
