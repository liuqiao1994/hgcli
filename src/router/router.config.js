/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/example',
    component: () => import('@/views/example/index'),
    meta: {
      title: '示例',
      keepAlive: true
    },
    children: [
      {
        path: 'example-child',
        name: 'Example',
        component: () => import('@/views/example/example'),
        meta: { title: '示例', keepAlive: false }
      }
    ]
  }
]
